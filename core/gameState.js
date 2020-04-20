// gameState: the actual state of the game
// this is the main part

// the only 3 functions that should be called from the outside here are makeGameState, playerAction_State, and tick
// all others are for internal use

// generate game state using randomness from content.js
// should only be called on the server
const generateGameState = players => ({players: players, ministryScores: makeMinistryScores(), playerCommands: makePlayerCommands(players), playerScreens: makePlayerScreens(players)})
// gives player a new command and returns the new state
const giveCommand_State = player => gameState => Object.assign({}, gameState, {playerCommands: genNewCommandForPlayer(player)(gameState)})
// called once a command is finished; returns the new state
// adds the right score to the ministries and gives a new command to player
const commandDone_State = player => gameState => giveCommand_State(player)(Object.assign({}, gameState, {ministryScores: addCommandScore(gameState.playerCommands[player.id])(gameState.ministryScores)}))
// penalize a player who did an action they weren't supposed to (takes away loyalty point); returns the new state
const penalizePlayer_State = player => gameState => Object.assign({}, gameState, {players: Object.assign({}, gameState.players, {[player.id]: penalizePlayer(player)})})
// apply an action (ie, a player puts a paper into a pipe); returns the new state
const applyAction_State = playerId => action => gameState => Object.assign({}, gameState, {playerScreens: Object.assign({}, gameState.playerScreens, {[playerId]: applyActionToScreen(action)(playerScreens[playerId])})})
// called when a player takes an action
// takes care of checking its whether anyone wanted it and awarding/taking away points
// TODO check validity of the action so players cant just send in random BS and crash everyone's game
// returns the new state
const playerAction_State = player => action => gameState => {
  let playerCommanded = gameState.players[playerCommandedForAction(playerCommands)(action)]
  return applyAction_State(player.id)(action)(playerCommanded // apply the action regardless of if it was commanded
    ? commandDone_State(playerCommanded)(gameState) // if someone was commanded, then replace their command and update scores
    : penalizePlayer_State(player)(gameState)) // otherwise, penalize the thoughtcrimer who did something without being told
}
// check if you lost the game
// ie, 2 ministries are doubleplusungood
// returns the game unchanged if you didn't lose the game
// returns false if you did lose
// the && is a jaden moment lmao, it returns the left side if left side is false, otherwise returns the right side, which is exactly what we need :)
// learned about this from ROBLOX
const checkForGameLoss_State = gameState => (getDoubleplusUngoodMinistries(gameState.ministryScores).length < 2) && gameState
// calls tickMinistryScores on ministryScores, returns the new state
const tickMinistries_State = tickTime => gameState => Object.assign({}, gameState, {ministryScores: tickMinistryScores(tickTime)(gameState.ministryScores)})
// disappears (ie, deletes from players list) any players whose loyalty are too low; returns the new state
const possiblyDisappearPlayers_State = gameState => Object.assign({}, gameState, {players: Object.keys(gameState.players).reduce((acc, plr) => shouldDisappearPlayer(plr) ? acc : Object.assign(acc, {[plr.id]: plr}), {})})
// called periodically; just does a bunch of functions on the state and returns the new state
// tickTime is so that we can easily edit how long a tick is without having to change everything
const tick = tickTime => gameState => checkForGameLoss_State(tickMinistries_State(tickTime)(possiblyDisappearPlayers_State(contentTick(tickTime)(gameState))))
