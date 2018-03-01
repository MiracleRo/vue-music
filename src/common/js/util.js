function getRandom (max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function shuffle (arr) {
  let _arr = arr.slice()

  for (let i = 0; i < _arr.length; i++) {
    let j = getRandom(0, i)
    let item = _arr[i]
    arr[i] = arr[j]
    arr[j] = item
  }

  return _arr
}
