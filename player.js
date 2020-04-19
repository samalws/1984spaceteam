var highestPlayerId = 0
const makePlayer = name => ({id: ++highestPlayerId /* jaden moment */, name: name, loyaltyLost: 0}) // TODO gonna also have stuff like IP and stuff
const penalizePlayer = player => Object.assign({}, player, {loyaltyLost: player.loyaltyLost + 1})
const loyaltyLostToDisappear = 10
const shouldDisappearPlayer = player => player.loyaltyLost > loyaltyLostToDisappear
const shouldntDisappearPlayer = player => !shouldDisappearPlayer(player)
