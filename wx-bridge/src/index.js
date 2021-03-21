import { helpers } from "./utils/helpers";

const $wx = {};
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
  "openDocument"
];

Object.keys(wx).forEach(key => {
  switch (true) {
    case key === "showToast":
      $wx[key] = options =>
        helpers.promisify(key, { icon: "none", ...options });
      break;

    case key === "navigateTo":
      $wx[key] = options =>
        helpers.promisify(key, {
          animationType: "slide-in-right",
          animationDuration: 200,
          ...options
        });
      break;

    case asyncFunctions.includes(key):
      $wx[key] = options => helpers.promisify(key, options);
      break;

    default:
      $wx[key] = wx[key];
  }
});

export default $wx;
