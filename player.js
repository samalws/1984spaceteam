var highestPlayerId = 0
makePlayer = name => ({id: ++highestPlayerId /* jaden moment */, name: name, loyaltyLost: 0}) // TODO gonna also have stuff like IP and stuff
penalizePlayer = player => Object.assign({}, player, {loyaltyLost: player.loyaltyLost + 1})
