// action = dragging a paper into a pipe

// enum of all the pipes
const pipes = Object.freeze({miniluv: 0, minipax: 1, miniplenty: 2, minitrue: 3, memoryHole = 4})
// make an action lol
// jaden moment
const makeAction = paperId => pipe => ({paperId: paperId, pipe: pipe})
// apply the action to the player's screen
const applyActionToScreen = action => deletePaperFromScreen(action.paperId)
