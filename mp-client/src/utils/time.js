import dayjs from 'dayjs'

const DATE_FORMATTER = 'YYYY-MM-DD'

export default {
  format (time, formatter) {
    return dayjs(time).format(formatter)
  },
  getDate (time) {
    return dayjs(time).format(DATE_FORMATTER)
  }
}
