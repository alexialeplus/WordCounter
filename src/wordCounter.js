function wordCounter (text, minLength) {
  if (typeof text === 'string' && Number.isInteger(minLength)) {
    text = text.toLowerCase()
    let allWords = text.split(/[-\s,'.;:!?]/)

    if (allWords.length > 0) {
      let alreadyUsed = []
      let result = {}

      allWords.forEach(function (word) {
        if (word.length >= minLength && alreadyUsed.indexOf(word) === -1) {
          let regEx = new RegExp('\\b' + word + '\\b', 'g')
          let occ = text.split(regEx).length - 1
          alreadyUsed.push(word)
          result[word] = occ
        }
      })

      return result
    } else {
      return false
    }
  } else {
    return false
  }
}

module.exports = wordCounter
