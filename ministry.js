const ministry = Object.freeze({miniluv: 0, minipax: 1, miniplenty: 2, minitrue: 3}) // Object.freeze makes an enum apparently
const makeMinistryScores = () => ({[ministry.miniluv]: 0, [ministry.minipax]: 0, [ministry.miniplenty]: 0, [ministry.minitrue]: 0})
const setMinistryScore = ministryToSet => newScore => ministryScores => Object.assign({}, ministryScores, {[ministryToSet]: newScore}) // update a score without changing the original one
const addMinistryScore = ministryToAdd => toAdd => ministryScores => setMinistryScore(ministryToAdd)(scores[ministryToAdd]+toAdd)(ministryScores) // add a score without changing the original one
const addMinistryScores = adds => ministryScores => Object.keys(adds).reduce((scores, key) => addMinistryScore(key)(adds[key])(scores), ministryScores) // add multiple scores in the format of like {miniplenty: 3, miniluv: 2}
const ministryUngoodLvl = 5
const ministryDoubleplusUngoodLvl = 10
const getUngoodMinistries = ministryToCheck => Object.keys(ministryToCheck).filter(x => ministryToCheck[x] < -ministryUngoodLvl || ministryToCheck[x] > ministryUngoodLvl)
const getDoubleplusUngoodMinistries = ministryToCheck => Object.keys(ministryToCheck).filter(x => ministryToCheck[x] < -ministryDoubleplusUngoodLvl || ministryToCheck[x] > ministryDoubleplusUngoodLvl)
