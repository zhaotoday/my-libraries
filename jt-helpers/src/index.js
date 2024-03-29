export default {
  to(promise) {
    return promise.then((res) => [null, res]).catch((error) => [error, null]);
  },
  isEmpty(value) {
    return value === null || value === undefined || value.trim() === "";
  },
  keyMirror(obj) {
    let ret = {};
    let key;

    for (key in obj) {
      if (!obj.hasOwnProperty(key)) {
        continue;
      }

      ret[key] = key;
    }

    return ret;
  },
  loadScript(url) {
    const httpReq = new window.XMLHttpRequest();

    httpReq.open("GET", url, true);
    httpReq.send(null);
  },
  sleep(n) {
    return new Promise((resolve) => {
      setTimeout(resolve, n);
    });
  },
  intercept(fn, { beforeCall, req, res } = {}) {
    return async (options) => {
      const fnOptions = req ? req(options) : options;

      beforeCall && (await beforeCall(fnOptions));

      return res ? res(fn(fnOptions)) : fn(fnOptions);
    };
  },
  getItem(items, key, val) {
    return items && items.length
      ? items.find((item) => item[key] === val) || {}
      : {};
  },
  encryptPhoneNumber(phoneNumber) {
    return phoneNumber
      ? `${phoneNumber.substring(0, 3)}****${phoneNumber.substring(7, 11)}`
      : "";
  },
  deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  },
  formatNumber(number, decimalPlaces = 2) {
    return parseFloat((number || 0).toFixed(decimalPlaces));
  },
  toLowerCamelCase(str) {
    return str.replace(/-([a-z])/g, (all, letter) => letter.toUpperCase());
  },
  formatHtml(html = "") {
    return html
      .replace('style=""', "")
      .replace(/\<img/gi, '<img style="max-width: 100%; height: auto" ')
      .replace(/\<iframe/gi, '<iframe style="width: 100%; min-height: 200px" ');
  },
  page(array, size) {
    const length = array.length;
    const newArray = [];
    const i = Math.ceil(length / size);

    let j = 0;

    while (j < i) {
      const spare = length - j * size >= size ? size : length - j * size;
      const temp = array.slice(j * size, j * size + spare);

      newArray.push(temp);
      j++;
    }

    return newArray;
  },
  addArrayItem(array, item) {
    return [...array, item];
  },
  deleteArrayItem(array, item) {
    const index = array.indexOf(item);
    const returnArray = [...array];

    if (index !== -1) {
      returnArray.splice(index, 1);
    }

    return returnArray;
  },
  download(url) {
    const iframe = document.createElement("iframe");

    iframe.src = url;
    iframe.style.display = "none";

    document.body.appendChild(iframe);
  },
};
