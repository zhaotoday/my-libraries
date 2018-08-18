import dayjs from 'dayjs'

const DATE_FORMATTER = 'YYYY-MM-DD'
const TIME_FORMATTER = 'YYYY-MM-DD HH:mm:ss'

export default {
  getDate (time) {
    return dayjs(time).format(DATE_FORMATTER)
  },
  getTime (time) {
    return dayjs(time).format(TIME_FORMATTER)
  }
}
