import dayjs from 'dayjs'

const DATE_FORMATTER = 'YYYY-MM-DD'
const TIME_FORMATTER = 'YYYY-MM-DD hh:mm'

export default {
  format (time, formatter) {
    return dayjs(time).format(formatter)
  },
  getDate (time) {
    return dayjs(time).format(DATE_FORMATTER)
  },
  getTime (time) {
    return dayjs(time).format(TIME_FORMATTER)
  }
}
