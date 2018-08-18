import qs from 'qs'

export default {
  toURL ({ route, options = {} }) {
    return `/${route}${Object.keys(options).length ? `?${qs.stringify(options)}` : ''}`
  }
}
