// command is like the things that come in the pipes and tell you what to do
makeCommand = text => name => ministryAdds => ({text: text, name: name, ministryAdds: ministryAdds}) // jaden moment
addCommandScore = command => ministries => addMinistryScores(command.ministryAdds)(ministries)
commandMatchesAction = command => action => command.name == action.name
playerCommandedForAction = playerCommands => action => Object.keys(playerCommands).filter(key => commandMatchesAction(playerCommands[key], action))[0] // if it's empty it returns undefined
