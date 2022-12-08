import dayjs from "dayjs";

export default {
  DATE_FORMATTER: "YYYY-MM-DD",
  TIME_FORMATTER: "YYYY-MM-DD HH:mm",
  getDate(time) {
    return time ? dayjs(time).format(this.DATE_FORMATTER) : "";
  },
  getTime(time) {
    return time ? dayjs(time).format(this.TIME_FORMATTER) : "";
  },
  format(time, formatter) {
    return time ? dayjs(time).format(formatter) : "";
  },
  add(time, num, unit) {
    return time ? dayjs(time).add(num, unit) : "";
  },
};
