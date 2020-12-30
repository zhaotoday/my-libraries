import helpers from "jt-helpers";
import consts from "@/utils/consts";

export default {
  ...helpers,
  goBack() {
    window.history.go(-1);
  },
  deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  },
  getFileUrlById(id) {
    return `${consts.BaseUrl}/public/files/${id}`;
  },
  getImageUrl({ id, width, height }) {
    let sizeParams = "";

    if (width && height) {
      sizeParams = `?imageView2/1/w/${width}/h/${height}/q/100`;
    } else if (width) {
      sizeParams = `?imageView2/2/w/${width}/q/100`;
    } else if (height) {
      sizeParams = `?imageView2/2/h/${height}/q/100`;
    }

    return `${consts.CdnUrl}/${id}${sizeParams}`;
  },
  getItemById(items, id) {
    return items && items.length
      ? items.find(item => +item.id === +id) || {}
      : {};
  },
  getItem(items, key, val) {
    return items && items.length
      ? items.find(item => item[key] === val) || {}
      : {};
  },
  formatNumber(number) {
    return parseFloat(number.toFixed(2));
  },
  toLowerCamelCase(str) {
    return str.replace(/-([a-z])/g, (all, letter) => letter.toUpperCase());
  },
  actionToStatus(statuses, action) {
    return statuses.find(item => item.action === action)["value"];
  }
};
