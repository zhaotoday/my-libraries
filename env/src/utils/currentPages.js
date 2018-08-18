import consts from './consts'
import Storage from './storage'
import page from './page'

const storage = new Storage(`${consts.prefix}pages`)
const MAX_PAGES = 5

export default {
  whiteList: [],
  addWhiteList (list) {
    this.whiteList = [...this.whiteList, ...list]
  },
  storePages () {
    /* global getCurrentPages */
    const currentPages = getCurrentPages()
    const { route, options } = currentPages[currentPages.length - 1]

    let storageValue = storage.get() || []

    const ignore = () => this.whiteList.includes(route) ||
      (storageValue.length > 0 && storageValue[storageValue.length - 1].route === route)

    if (!ignore()) {
      if (storageValue.length >= MAX_PAGES) {
        storageValue.shift()
      }

      storageValue.push({
        route,
        options,
        url: page.toURL({ route, options })
      })

      storage.set(storageValue)
    }
  },
  getPages () {
    return storage.get()
  },
  clearPages () {
    storage.remove()
  }
}
