// command is like the things that come in the pipes and tell you what to do
makeCommand = text => ministryAdds => ({text: text, ministryAdds: ministryAdds}) // jaden moment
runCommand = cmd => ministries => addMinistryScores(cmd.ministryAdds)(ministries)
