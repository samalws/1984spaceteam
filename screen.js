// screen: list of all the papers on someone's screen

// jaden moment
makeScreen = () => []
// make paperless screens for all the players
makePlayerScreens = players => Object.keys(players).reduce((acc, id) => Object.assign(acc, {[id]: makeScreen()}), {})
// add a paper to a screen, returning new screen
addPaperToScreen = paper => screen => [...screen, paper]
// delete a paper from screen, returning new screen
deletePaperFromScreen = paperId => screen => screen.filter(p => p.id != paperId)
