/**
 * Initialize switcher
 */
$(() => {
  $.switcher();
});

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
 * Update range slider
 * @param {number} value
 * @param {number} max
 */
function updateRange(value) {
  const max = $('#volume').attr('max');
  const percentage = Math.round((value / max) * 100);
  $('#percentage').html(`${value}%`);
  $('#volume').val(value);
  document.documentElement.style.setProperty('--range', `${percentage}%`);
  if (percentage > 30 && percentage < 75) {
    if ($('#percentage').hasClass('overlay')) return;
    $('#percentage').addClass('overlay');
    return;
  }
  $('#percentage').removeClass('overlay');
}

/**
 * @param {string} key
 * @param {*} value
 * @param {function} callback
 */
function updateStorage(key, value) {
  return new Promise((resolve) => {
    chrome.storage.sync.set({ [key]: value }, () => {
      const lastError = chrome.runtime.lastError;
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
      const lastError = chrome.runtime.lastError;
      resolve(result[key]);
    });
  });
}

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
 * Add class .active to scope button
 * @param {string} scope
 */
function setScope(scope) {
  $('.button').removeClass('active');
  $(`.button[data-scope="${scope}"]`).addClass('active');
}

async function sendMessage(message) {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage(message, (response) => {
      const lastError = chrome.runtime.lastError;
      resolve(response);
    });
  });
}

/**
 * Get page data {volume, scope}
 */
async function getPageData() {
  const currentTab = await getCurrentTab();
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
  updateRange(value);
  const currentTab = await getCurrentTab();
  if (!currentTab) return;
  const fullUrl = currentTab.url;
  const url = getRootUrl(currentTab.url);
  const websiteData = await getFromStorage('websites');

  await sendMessage({
    action: 'setVolume', tabId: currentTab.id, tabUrl: currentTab.url, volume: value,
  });

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

/**
 * Update volume scope
 * @param {string} scope
 */
async function updateScope(scope) {
  const currentTab = await getCurrentTab();
  const fullUrl = currentTab.url;
  const url = getRootUrl(currentTab.url);
  const websiteData = await getFromStorage('websites');

  if (scope === 'any-website') {
    const globalVolume = await getFromStorage('globalVolume');
    await updateStorage('globalScope', true);
    await updateStorage('websites', {
      'current-tab': {},
      'current-website': {},
    });
    await updateVolume(globalVolume);
    return;
  } if (scope === 'current-website') {
    if (url in websiteData['current-website']) return;

    await updateStorage('globalScope', false);
    if (fullUrl in websiteData['current-tab']) delete websiteData['current-tab'][fullUrl];
    websiteData['current-website'][url] = {};
    websiteData['current-website'][url].volume = 100;
    await updateStorage('websites', websiteData);
    await updateVolume(websiteData['current-website'][url].volume);
    return;
  }

  await updateStorage('globalScope', false);
  if (fullUrl in websiteData['current-tab']) return;

  if (url in websiteData['current-website']) delete websiteData['current-website'][url];
  websiteData['current-tab'][fullUrl] = {};
  websiteData['current-tab'][fullUrl].volume = 100;
  await updateStorage('websites', websiteData);
  await updateVolume(100);
}

$('#volume').on('input', (event) => {
  const value = event.target.value;
  updateRange(value);
});

$('#volume').change((event) => {
  const value = Number(event.target.value);
  updateVolume(value);
});

$('.button').click(async function handler() {
  const scope = $(this).data('scope');
  $('.button').removeClass('active');
  $(this).addClass('active');
  updateScope(scope);
});

async function toggleExtStatus(checked) {
  if (checked) {
    $('body').removeClass('disabled');
    $('#logo').attr('src', '/img/logo.png');
    await sendMessage({ action: 'enableExtension' });
    return;
  }
  $('body').addClass('disabled');
  $('#logo').attr('src', '/img/logo-disabled.png');
  await sendMessage({ action: 'disableExtension' });
}

$('#ext-status').change(async (event) => {
  const checked = event.target.checked;
  await updateStorage('extStatus', checked);
  toggleExtStatus(checked);
});

(async () => {
  const extStatus = await getFromStorage('extStatus');
  $('#ext-status').prop('checked', extStatus);
  toggleExtStatus(extStatus);
  const pageData = await getPageData();
  if (!pageData) return;
  setScope(pageData.scope);
  updateRange(pageData.volume);
})();
