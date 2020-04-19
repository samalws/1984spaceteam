// enum of all the ministries
const ministry = Object.freeze({miniluv: 0, minipax: 1, miniplenty: 2, minitrue: 3})
// generate a ministryScores thing with all the scores set to 0
const makeMinistryScores = () => ({[ministry.miniluv]: 0, [ministry.minipax]: 0, [ministry.miniplenty]: 0, [ministry.minitrue]: 0})
// sets the score of a ministry, returning the new ministryScores
const setMinistryScore = ministryToSet => newScore => ministryScores => Object.assign({}, ministryScores, {[ministryToSet]: newScore})
// add to the score of a ministry, returning the new ministryScores
const addMinistryScore = ministryToAdd => toAdd => ministryScores => setMinistryScore(ministryToAdd)(scores[ministryToAdd]+toAdd)(ministryScores)
// adds to the scores of multiple ministries, returning the new ministryScores
// format of adds: {ministry.miniluv: 65, ministry.minipax: 6}
// addMinistryScores({ministry.miniluv: 65, ministry.minipax: 6})(scores) is equivalent to:
//   addMinistryScore(ministry.miniluv)(65)(addMinistryScore(ministry.minipax)(6)(scores))
const addMinistryScores = adds => ministryScores => Object.keys(adds).reduce((scores, key) => addMinistryScore(key)(adds[key])(scores), ministryScores) // add multiple scores in the format of like {miniplenty: 3, miniluv: 2}
const ministryUngoodLvl = 5
const ministryDoubleplusUngoodLvl = 10
// return a list of ministries whose scores' absolute values are > ministryUngoodLvl
// ie list of ministries that're ungood
const getUngoodMinistries = ministryScores => Object.keys(ministryScores).filter(x => ministryScores[x] < -ministryUngoodLvl || ministryScores[x] > ministryUngoodLvl)
// ditto but for doubleplusungood
const getDoubleplusUngoodMinistries = ministryScores => Object.keys(ministryScores).filter(x => ministryScores[x] < -ministryDoubleplusUngoodLvl || ministryScores[x] > ministryDoubleplusUngoodLvl)
