const makeGameState = players => ({players: players, ministryScores: makeMinistryScores(), playerCommands: makePlayerCommands(), playerScreens: makePlayerScreens()})
const giveCommandOnState = player => gameState => Object.assign({}, gameState, {playerCommands: genNewCommandForPlayer(player)(playerCommands)}) // give a player a new command
const commandDoneOnState = player => gameState => giveCommandOnState(player)(Object.assign({}, gameState, {ministryScores: addCommandScore(gameState.playerCommands[player.id])(gameState.ministryScores)}))
const penalizePlayerOnState = player => gameState => Object.assign({}, gameState, {players: Object.assign({}, gameState.players, {[player.id]: penalizePlayer(player)})})
const applyActionOnState = player => action => gameState => Object.assign({}, gameState, {playerScreens: Object.assign({}, gameState.playerScreens, {[player.id]: applyActionToScreen(action)(playerScreens[player.id])})})
const playerActionOnState = player => action => gameState => {
  let playerCommanded = gameState.players[playerCommandedForAction(playerCommands)(action)]
  return applyActionOnState(action)(playerCommanded // apply the action regardless of if it was commanded
    ? commandDoneOnState(playerCommanded)(gameState) // if someone was commanded, then replace their command and update scores
    : penalizePlayerOnState(player)(gameState)) // otherwise, penalize the thoughtcrimer who did something without being told
}
const checkForGameLossState = gameState => (getDoubleplusUngoodMinistries(gameState.ministries).length < 2) && gameState // jaden moment
const tickMinistriesState = gameState => Object.assign({}, gameState, {ministries: tickMinistries(gameState.ministries)})
const possiblyKickPlayersState = gameState => Object.assign({}, gameState, {players: gameState.players.filter(shouldntKickPlayer)})
const tick = gameState => checkForGameLossState(tickMinistriesState(possiblyKickPlayersState(contentTick(gameState)))
