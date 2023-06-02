Object.assign(Array.prototype, {
  unique() {
    const temArr = [this[0]]
    for (const item of this) {
      if (temArr.indexOf(item) < 0) {
        temArr.push(item)
      }
    }
    return temArr
  },
})
