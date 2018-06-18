import consts from './consts'
import Storage from './storage'

const storage = new Storage(`${consts.prefix}pages`)
const MAX_PAGES = 5

export default () => {
  /* global getCurrentPages */
  const currentPages = getCurrentPages()
  const currentPage = currentPages[currentPages.length - 1]

  let storageValue = storage.get() || []

  if (storageValue.length > MAX_PAGES) {
    storageValue.shift()
  }

  storageValue.push(currentPage)
  storage.set(storageValue)

  return storageValue
}
