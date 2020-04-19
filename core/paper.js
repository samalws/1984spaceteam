// a PAPER

// so that all paper ids are unique
var highestPaperId = 0
// make a paper with the given words
makePaper = words => {
  let a = words.map(x => false)
  return ({words: words, wordsCensored: a, wordsChanged: a, id: highestPaperId++})
}
// change a certain element of a certain array in paper to a certain value, and return the result
changePaperElem = elemName => elemNum => elemVal => paper => {
  arr = [...(paper[elemName])]
  arr[elemNum] = elemVal
  return Object.assign({}, paper, {[elemName]: arr})
}
// censor a word on the paper
censorPaperWord = elemNum => changePaperElem("wordsCensored")(elemNum)(true)
// change a word on the paper
// params: word number, new text
// CURRYING <3
changePaperWord = changePaperElem("wordsChanged")
// check if papers are equal
// case insensitive
papersEqual = a => b => {
  if (a.id != b.id) return false
  for (let i = 0; i < a.words.length; i++)
    if (a.wordsCensored[i] != b.wordsCensored[i]) || a.wordsChanged[i].toLowerCase() != b.wordsChanged[i].toLowerCase())
      return false
  return true
}
