// action = dragging a paper into a pipe

// make an action lol
// jaden moment
const makeAction = paperId => pipe => ({paperId: paperId, pipe: pipe})
// apply the action to the player's screen
const applyActionToScreen = action => deletePaperFromScreen(action.paperId)
// check if 2 actions are the same
const actionsEqual = a => b => a.paperId == b.paperId && a.pipe == b.pipe
