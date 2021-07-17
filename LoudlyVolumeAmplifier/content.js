let tabId;
const tabUrl = document.location.href;

async function getTabId() {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({ action: 'getTabId' }, (res) => {
      tabId = res.tabId;
      resolve();
    });
  });
}

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
 */
async function getFromStorage(key) {
  return new Promise((resolve) => {
    chrome.storage.sync.get([key], (result) => {
      resolve(result[key]);
    });
  });
}

/**
 * Get page data {volume, scope}
 */
async function getPageData() {
  const fullUrl = tabUrl;
  const url = getRootUrl(tabUrl);
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

function windowIsset() {
  return Boolean(document.querySelector('#loudly_indicator'));
}

async function createWindow(_volume = null) {
  let volume = _volume;
  const el = document.createElement('div');
  if (volume === null) {
    const pageData = await getPageData();
    volume = pageData.volume;
  }
  el.id = 'loudly_indicator';

  el.innerHTML = `
        <img src="${chrome.extension.getURL('/img/sphere.svg')}" width="24px">
        <h1 id="loudly-percentage">${volume}%</h1>
    `;
  document.body.appendChild(el);
}

async function getGain() {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({ action: 'getGain', tabId }, (response) => {
      resolve(response);
    });
  });
}

async function updateControls(_volume = null, ignoreExtStatus = false) {
  const extStatus = await getFromStorage('extStatus');
  if (!ignoreExtStatus && !extStatus) return;
  if (!windowIsset()) createWindow(_volume || null);
  if (!document.getElementById('loudly-percentage')) return;
  const pageData = await getPageData();
  let volume = _volume;
  if (volume === null) volume = pageData.volume;
  document.getElementById('loudly-percentage').innerHTML = `${volume}%`;
}

window.onload = async () => {
  await getTabId();
  const gain = await getGain();
  if (!gain.gainValue) return;
  updateControls();
};

chrome.runtime.onMessage.addListener(
  async (request) => {
    if (request.action === 'updateVolume') {
      const isChangeExtStatus = request.isChangeExtStatus || false;
      updateControls(request.value || null, isChangeExtStatus);
    }
  },
);
