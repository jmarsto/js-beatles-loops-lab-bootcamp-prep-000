function theBeatlesPlay(musicians, instruments) {
  var newStrings = []
  for (var i = 0; i < musicians.length; i++) {
    newStrings[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return newStrings
}
var i = 0

function johnLennonFacts(array) {
  var newFacts = []
  while (i < array.length) {
    newFacts[i] = `${array[i]}!!!`
    i++
  }
  return newFacts
}

function iLoveTheBeatles(num) {
  var arr = []
  do {
    arr.push("I love the Beatles! ")
  num++
    return arr
  }
  while (num < 15);
}