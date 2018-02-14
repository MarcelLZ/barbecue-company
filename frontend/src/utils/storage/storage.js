export default class {
  constructor (storage) {
    this.storage = storage
  }

  save (key, value) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  get (key) {
    return JSON.parse(this.storage.getItem(key))
  }

  remove (key) {
    this.storage.removeItem(key)
  }
}
