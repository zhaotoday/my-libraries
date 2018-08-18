import dayjs from 'dayjs'

const DATE_FORMATTER = 'YYYY-MM-DD'

export default {
  getDate (time) {
    return dayjs(time).format(DATE_FORMATTER)
  }
}
