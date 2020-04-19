// the game content (random generation etc)

// TODO

const makePlayerCommands = players => Object.keys(players).reduce((acc, key) => Object.assign(acc, {[key]: makeCommand("a")({})(0)({})}), {})
const makePlayerScreens = players => Object.keys(players).reduce((acc, key) => Object.assign(acc, {[key]: makeScreen()}), {})
const genNewCommandForPlayer = player => gameState => makeCommand("a")({})(0)({})
const contentTick = tickTime => gameState => gameState
