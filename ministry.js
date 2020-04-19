// enum of all the ministries
const ministries = {miniluv: 0, minipax: 1, miniplenty: 2, minitrue: 3}
// generate a ministryScores thing with all the scores set to 0
const makeMinistryScores = () => ({[ministries.miniluv]: 0, [ministries.minipax]: 0, [ministries.miniplenty]: 0, [ministries.minitrue]: 0})
// sets the score of a ministry, returning the new ministryScores
const setMinistryScore = ministryToSet => newScore => ministryScores => Object.assign({}, ministryScores, {[ministryToSet]: newScore})
// add to the score of a ministry, returning the new ministryScores
const addMinistryScore = ministryToAdd => toAdd => ministryScores => setMinistryScore(ministryToAdd)(scores[ministryToAdd]+toAdd)(ministryScores)
// adds to the scores of multiple ministries, returning the new ministryScores
// format of adds: {ministries.miniluv: 65, ministries.minipax: 6}
// addMinistryScores({ministries.miniluv: 65, ministries.minipax: 6})(scores) is equivalent to:
//   addMinistryScore(ministries.miniluv)(65)(addMinistryScore(ministries.minipax)(6)(scores))
const addMinistryScores = adds => ministryScores => Object.keys(adds).reduce((scores, key) => addMinistryScore(key)(adds[key])(scores), ministryScores) // add multiple scores in the format of like {miniplenty: 3, miniluv: 2}
const ministryUngoodLvl = 5
const ministryDoubleplusUngoodLvl = 10
// return a list of ministries whose scores' absolute values are > ministryUngoodLvl
// ie list of ministries that're ungood
const getUngoodMinistries = ministryScores => Object.keys(ministryScores).filter(x => ministryScores[x] < -ministryUngoodLvl || ministryScores[x] > ministryUngoodLvl)
// ditto but for doubleplusungood
const getDoubleplusUngoodMinistries = ministryScores => Object.keys(ministryScores).filter(x => ministryScores[x] < -ministryDoubleplusUngoodLvl || ministryScores[x] > ministryDoubleplusUngoodLvl)
// ministry scores decrease rate per second
ministriesDecreaseRate = .1
// decrease all the ministry scores a bit, return the new ministries
// CURRYING <3
tickMinistryScores = tickTime => addMinistryScores([0,1,2,3].reduce((acc, n) => Object.assign(acc, {n: tickTime * ministriesDecreaseRate}), {}))
