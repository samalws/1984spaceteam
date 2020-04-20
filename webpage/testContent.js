// example content for testing

const makePlayerCommands = players => Object.keys(players).reduce((acc, key) => Object.assign(acc, {[key]: makeCommand("a")({})(0)({})}), {})
const makePlayerScreens = players => Object.keys(players).reduce((acc, key) => Object.assign(acc, {[key]: makeScreen()}), {})
const genNewCommandForPlayer = player => gameState => makeCommand("A COMMAND")({})(0)({})
const contentTick = tickTime => gameState => gameState
const genUsername = () => "ME"
