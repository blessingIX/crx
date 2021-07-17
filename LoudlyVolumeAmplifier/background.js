function getRootUrl(url) {
  let hostname;
  if (url.indexOf('//') > -1) {
    hostname = url.split('/')[2];
  } else {
    hostname = url.split('/')[0];
  }
  hostname = hostname.split(':')[0];
  hostname = hostname.split('?')[0];

  return hostname;
}

/**
 * @param {string} key
 * @param {*} value
 * @param {function} callback
 */
function updateStorage(key, value) {
  return new Promise((resolve) => {
    chrome.storage.sync.set({ [key]: value }, () => {
      resolve();
    });
  });
}

/**
 * @param {string} key
 */
async function getFromStorage(key) {
  return new Promise((resolve) => {
    chrome.storage.sync.get([key], (result) => {
      resolve(result[key]);
    });
  });
}

async function getAllTabs() {
  return new Promise((resolve) => {
    chrome.tabs.query({}, (tabs) => {
      resolve(tabs);
    });
  });
}

chrome.runtime.onInstalled.addListener(() => {
  updateStorage('extStatus', true);
  updateStorage('globalVolume', 100);
  updateStorage('globalScope', false);
  updateStorage('websites', {
    'current-tab': {},
    'current-website': {},
  });
});

async function getCurrentTab() {
  return new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const lastError = chrome.runtime.lastError;
      if (!tabs) resolve(null);
      resolve(tabs[0]);
    });
  });
}

/**
 * Get page data {volume, scope}
 */
async function getPageData() {
  const currentTab = await getCurrentTab();
  if (!currentTab) return false;
  const fullUrl = currentTab.url;
  const url = getRootUrl(currentTab.url);
  const websiteData = await getFromStorage('websites');

  const globalScope = await getFromStorage('globalScope');
  if (globalScope) return { volume: await getFromStorage('globalVolume'), scope: 'any-website' };

  if (fullUrl in websiteData['current-tab']) {
    return { volume: websiteData['current-tab'][fullUrl].volume, scope: 'current-tab' };
  }

  if (url in websiteData['current-website']) {
    return { volume: websiteData['current-website'][url].volume, scope: 'current-website' };
  }

  return { volume: 100, scope: 'current-tab' };
}

/**
 * Update pages volume
 * @param {number} value
 */
async function updateVolume(value) {
  const currentTab = await getCurrentTab();
  if (!currentTab) return;
  const fullUrl = currentTab.url;
  const url = getRootUrl(currentTab.url);
  const websiteData = await getFromStorage('websites');

  const globalScope = await getFromStorage('globalScope');
  if (globalScope) {
    await updateStorage('globalVolume', value);
    return;
  }

  if (fullUrl in websiteData['current-tab']) {
    websiteData['current-tab'][fullUrl].volume = value;
    await updateStorage('websites', websiteData);
    return;
  }

  if (url in websiteData['current-website']) {
    websiteData['current-website'][url].volume = value;
    await updateStorage('websites', websiteData);
    return;
  }

  websiteData['current-tab'][fullUrl] = {};
  websiteData['current-tab'][fullUrl] = { volume: value, scope: 'current-tab' };
  await updateStorage('websites', websiteData);
}
const updateBadge = (tabId, text) => chrome.browserAction.setBadgeText({ text, tabId });

async function isExtensionEnabled() {
  const extStatus = await getFromStorage('extStatus');
  if (!extStatus) return false;
  return true;
}

const audioStates = {};

async function initVolume(tabId) {
  if (!await isExtensionEnabled()) return false;
  const volume = await getPageData();
  if (volume) {
    updateBadge(tabId, String(volume.volume));
  }
  return true;
}

chrome.tabs.onActivated.addListener(async (info) => {
  if (!Object.prototype.hasOwnProperty.call(audioStates, info.tabId)) return;
  if (!await initVolume(info.tabId)) return;
  chrome.tabs.sendMessage(info.tabId, { action: 'updateVolume' });
});

chrome.tabs.onUpdated.addListener(async (info) => {
  if (!Object.prototype.hasOwnProperty.call(audioStates, info.tabId)) return;
  await initVolume(info.tabId);
});

window.audioStates = audioStates;
const connectStream = (tabId, stream) => {
  if (!stream) return;
  const audioContext = new window.AudioContext();
  const source = audioContext.createMediaStreamSource(stream);
  const gainNode = audioContext.createGain();
  const compressor = audioContext.createDynamicsCompressor();
  compressor.threshold.setValueAtTime(-50, audioContext.currentTime);
  compressor.knee.setValueAtTime(40, audioContext.currentTime);
  compressor.ratio.setValueAtTime(12, audioContext.currentTime);
  compressor.attack.setValueAtTime(0, audioContext.currentTime);
  compressor.release.setValueAtTime(0.25, audioContext.currentTime);

  source.connect(compressor);
  source.connect(gainNode);
  gainNode.connect(audioContext.destination);
  audioStates[tabId] = {
    audioContext,
    gainNode,
  };
};

const setTabGain = (tabId, _level) => {
  const level = _level || 100;
  audioStates[tabId].gainNode.gain.value = level / 100;
};

async function captureTab(tabId) {
  return new Promise((resolve) => {
    chrome.tabCapture.capture({
      audio: true,
      video: false,
    }, (stream) => {
      if (chrome.runtime.lastError) resolve(null);
      connectStream(tabId, stream);
      resolve(true);
    });
  });
}

async function setVolume(tabId, _volume = null) {
  let volume = _volume;
  if (volume === null) {
    const pageData = await getPageData();
    if (!pageData) return;
    volume = pageData.volume;
  }

  if (!Object.prototype.hasOwnProperty.call(audioStates, tabId)) {
    if (!await captureTab(tabId)) return;
  }

  setTabGain(tabId, volume);
  await updateVolume(volume);
  updateBadge(tabId, String(volume));
  chrome.tabs.sendMessage(tabId, { action: 'updateVolume', value: volume });
}

async function disableGain() {
  const tabs = await getAllTabs();
  tabs.forEach((tab) => {
    if (!Object.prototype.hasOwnProperty.call(audioStates, tab.id)) return;
    setTabGain(tab.id, 100);
    updateBadge(tab.id, '100');
    chrome.tabs.sendMessage(tab.id, { action: 'updateVolume', value: 100, isChangeExtStatus: true });
  });
}

async function returnGain() {
  const tabs = await getAllTabs();
  const pageData = await getPageData();
  if (!pageData) return;
  const volume = pageData.volume;
  tabs.forEach((tab) => {
    if (!Object.prototype.hasOwnProperty.call(audioStates, tab.id)) return;
    setTabGain(tab.id, volume);
    updateBadge(tab.id, String(volume));
    chrome.tabs.sendMessage(tab.id, { action: 'updateVolume', value: volume, isChangeExtStatus: true });
  });
}

chrome.tabs.onRemoved.addListener((tabId) => {
  if (Object.prototype.hasOwnProperty.call(audioStates, tabId)) {
    audioStates[tabId].audioContext.close().then(() => {
      delete audioStates[tabId];
    });
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getGain') {
    let gainValue = null;
    if (Object.prototype.hasOwnProperty.call(audioStates, message.tabId)) {
      gainValue = audioStates[message.tabId].gainNode.gain.value;
    }

    sendResponse({
      gainValue,
    });
  } else if (message.action === 'enableExtension') {
    returnGain();
  } else if (message.action === 'disableExtension') {
    disableGain();
  } else if (message.action === 'setVolume') {
    setVolume(message.tabId, message.volume);
  } else if (message.action === 'getTabId') {
    sendResponse({ tabId: sender.tab.id });
  } else if (message.action === 'getTabUrl') {
    sendResponse({ tabUrl: sender.tab.url });
  }
});
