// a PAPER

// so that all paper ids are unique
var highestPaperId = 0
// make a paper with the given words
makePaper = words => {
  let a = words.map(x => false)
  return ({words: words, wordsCensored: a, wordsMadeIntoNewspeak: a, wordsNumberChanged: a, id: highestPaperId++})
}
// change a certain element of a certain array in paper from false to true, and return the result
changePaperElem = elemName => elemNum => paper => {
  arr = [...(paper[elemName])]
  arr[elemNum] = true
  return Object.assign({}, paper, {[elemName]: arr})
}
// censor a word on the paper
// CURRYING
censorPaperWord = changePaperElem("wordsCensored")
// ditto for wordsMadeIntoNewspeak and wordsNumberChanged:
makePaperWordNewspeak = changePaperElem("wordsMadeIntoNewspeak")
changePaperNumber = changePaperElem("wordsNumberChanged")
// check if papers are equal
// equality conditions: same ID; for each word: (wordsCensored both true or (wordsCensored equal and wordsMadeIntoNewspeak equal and wordsNumberChanged same))
papersEqual = a => b => {
  if (a.id != b.id) return false
  for (let i = 0; i < a.words.length; i++)
    if (!(a.wordsCensored[i] && b.wordsCensored[i])) {
      if (a.wordsCensored[i] != b.wordsCensored[i]) return false
      if (a.wordsMadeIntoNewspeak[i] != b.wordsMadeIntoNewspeak[i]) return false
      if (a.wordsNumberChanged[i] != b.wordsNumberChanged[i]) return false
    }
  return true
}
