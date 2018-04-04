const browsers = [];
const Browser = {
  use(browser) {
    if (!browser.name) {
      console.warn('must be have name');
    }
    if(!existMerge(browser.name, browser.API)) browsers.push(browser);
    createAPI(browser.API);
    return this;
  }
}

function existMerge(name, API) {
  let result = false;
  browsers.forEach((browser) => {
    if (browser.name === name) {
      result = true;
      browser.API = {
        ...browser.API,
        ...API
      };
      return;
    }
  });
  return result;
}

function createAPI(API) {
  for (let apiName in API) {
    if (!API.hasOwnProperty(apiName)) continue;
    Browser[apiName] = (function (apiName) {
      return function () {
        return callAPI(arguments, apiName);
      }
    })(apiName);
  }
}

function callAPI (args, apiName) {
  for (var i = 0; i < browsers.length; i++) {
    const browser = browsers[i];
    if (!browser.isBrowser()) continue;
    const API = browser.API;
    if (!API[apiName]) continue;
    return API[apiName].apply(null, args);
  }
  console.log('找不到此方法:', apiName);
}

export default Browser
