// so that all player ids are unique
var highestPlayerId = 0
// generate a player object with a given name
// TODO id versus name?
const makePlayer = id => ({id: id, loyaltyLost: 0})
// penalize a player who did an UNGOOD action (ie an action that no one received a command to do), returns new player object
const penalizePlayer = player => Object.assign({}, player, {loyaltyLost: player.loyaltyLost + 1})
// (getting disappeared = kicked from the game)
// when you do an ungood action (ie when penalizePlayer is called) [loyaltyLostToDisappear] times you get kicked
const loyaltyLostToDisappear = 10
// should this player be disappeared?
const shouldDisappearPlayer = player => player.loyaltyLost > loyaltyLostToDisappear
const shouldntDisappearPlayer = player => !shouldDisappearPlayer(player)
