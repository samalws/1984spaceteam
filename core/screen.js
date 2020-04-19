// screen: list of all the papers on someone's screen

// jaden moment
makeScreen = () => []
// add a paper to a screen, returning new screen
addPaperToScreen = paper => screen => [...screen, paper]
// delete a paper from screen, returning new screen
deletePaperFromScreen = paperId => screen => screen.filter(p => p.id != paperId)
