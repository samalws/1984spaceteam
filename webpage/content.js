// content (random generation and stuff)
// server takes care of content generation so these are just dummy functions

// note lack of makePlayerCommands and makePlayerScreens
// since the server is the only one that should be using generateGameState, those functions aren't needed on clientside

const genNewCommandForPlayer = player => gameState => makeCommand("")({})(0)({})
const contentTick = tickTime => gameState => gameState
cont genUsername = () => "ME"
