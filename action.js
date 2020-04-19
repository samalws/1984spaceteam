const makeAction = name => funcOnScreen => ({name: name, funcOnScreen: funcOnScreen}) // jaden moment
const applyActionToScreen = action => action.funcOnScreen // the wonders of currying
