const $wx = {};

const promisify = (fn, options) => {
  return new Promise((resolve, reject) => {
    (uni || wx)[fn](
      Object.assign({}, options, {
        success: resolve,
        fail: reject
      })
    );
  });
};

const asyncFunctions = [
  "request",
  "getSetting",
  "getUserInfo",
  "checkSession",
  "login",
  "navigateTo",
  "redirectTo",
  "switchTab",
  "reLaunch",
  "requestPayment",
  "showActionSheet",
  "showLoading",
  "showModal",
  "showToast",
  "hideLoading",
  "hideToast",
  "getImageInfo",
  "setClipboardData",
  "makePhoneCall",
  "getLocation",
  "openLocation",
  "scanCode",
  "chooseImage",
  "chooseVideo",
  "uploadFile",
  "navigateBack",
  "downloadFile",
  "saveImageToPhotosAlbum",
  "setNavigationBarTitle",
  "previewImage",
  "openSetting",
  "chooseLocation",
  "chooseMessageFile",
  "saveFile",
  "openDocument",
  "writeBLECharacteristicValue",
  "setBLEMTU",
  "readBLECharacteristicValue",
  "notifyBLECharacteristicValueChange",
  "makeBluetoothPair",
  "getBLEDeviceServices",
  "getBLEDeviceRSSI",
  "getBLEDeviceCharacteristics",
  "createBLEConnection",
  "closeBLEConnection",
  "stopBluetoothDevicesDiscovery",
  "startBluetoothDevicesDiscovery",
  "openBluetoothAdapter",
  "getConnectedBluetoothDevices",
  "getBluetoothDevices",
  "getBluetoothAdapterState",
  "closeBluetoothAdapter"
];

Object.keys(uni || wx).forEach(key => {
  switch (true) {
    case key === "showToast":
      $wx[key] = options => promisify(key, { icon: "none", ...options });
      break;

    case key === "navigateTo":
      $wx[key] = options => {
        const url = options.url || options;

        if (url.indexOf("https://") !== -1 || url.indexOf("http://") !== -1) {
          // #ifdef APP-PLUS
          plus.runtime.openWeb(url);
          // #endif
          // #ifdef H5
          window.location.href = url;
          // #endif
        } else {
          return promisify(key, {
            animationType: "slide-in-right",
            animationDuration: 200,
            ...(options.url ? options : {}),
            url
          });
        }
      };
      break;

    case key === "switchTab":
    case key === "redirectTo":
    case key === "reLaunch":
      $wx[key] = options => {
        const url = options.url || options;

        return promisify(key, {
          ...(options.url ? options : {}),
          url
        });
      };
      break;

    case asyncFunctions.includes(key):
      $wx[key] = options => promisify(key, options);
      break;

    default:
      $wx[key] = (uni || wx)[key];
  }
});

export default $wx;
