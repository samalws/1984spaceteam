// content (random generation and stuff)
// unlike website/content.js, this does the actual randomization stuff
// MORE LIKE *WILL* DO THE ACTUAL RANDOMIZATION STUFF xd.

const makePlayerCommands = players => Object.keys(players).reduce((acc, key) => Object.assign(acc, {[key]: makeCommand("a")({})(0)({})}), {})
const makePlayerScreens = players => Object.keys(players).reduce((acc, key) => Object.assign(acc, {[key]: makeScreen()}), {})
const genNewCommandForPlayer = player => gameState => makeCommand("A COMMAND")({})(0)({})
const contentTick = tickTime => gameState => gameState
