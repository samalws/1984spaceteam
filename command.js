// command is like the things that come in the pipes and tell you what to do

// make a command given THOSE parameters
// ministryAdds is like the type of argument you give to addMinistryScore
makeCommand = text => name => timeLimit => ministryAdds => ({text: text, name: name, timeLimit: timeLimit, ministryAdds: ministryAdds}) // jaden moment
// apply the ministryAdds to the ministry scores
// CURRYING <3
addCommandScore = command => addMinistryScores(command.ministryAdds)
// whether the action is the right thing to do for this command and the command isn't expired
commandMatchesAction = command => action => time => actionsEqual(command.action, action) && time < command.timeLimit
// find the player who had the command for an action to be done, returning undefined if that player doesn't exist
// note that (empty array)[0] == undefined
playerCommandedForAction = playerCommands => action => Object.keys(playerCommands).filter(key => commandMatchesAction(playerCommands[key], action))[0]
