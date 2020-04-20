var myUsername = genUsername()
var globalState = undefined
// when a new state happens, update stuff on the screen to match
const processNewState = state => state.playerScreens[myUsername].forEach(showRealPaper) // TODO also delete papers that should be gone
const changeGlobalState = state => { globalState = state; processNewState(state) }
// create a websocket; actionCallEvent is the function to tell the websocket about an action you took
var actionCallEvent = makeWebsocket(myUsername, changeGlobalState)
// called when a paper is dragged into a pipe
const actionDoneEvent = paper => pipeId => { changeGlobalState(playerAction_State(myUsername)(globalState)); actionCallEvent(makeActionFromRealPaper(paper)(pipeId)) }

const tickGlobalState = tickTime => { globalState = tick(globalState); processNewState(globalState) }
setTimeout(() => tickGlobalState(1000), 1000)
