// command is like the things that come in the pipes and tell you what to do
makeCommand = text => ministryAdds => ({text: text, ministryAdds: ministryAdds}) // this is very unnecessary lmao
runCommand = cmd => ministryScores => addMinistryScores(cmd.ministryAdds)(ministryScores)
