const ministry = Object.freeze({miniluv: 0, minipax: 1, miniplenty: 2, minitrue: 3}) // Object.freeze makes an enum apparently
const makeMinistryScores = () => ({[ministry.miniluv]: 0, [ministry.minipax]: 0, [ministry.miniplenty]: 0, [ministry.minitrue]: 0})
const setMinistryScore = ministryToSet => newScore => scores => Object.assign({}, scores, {[ministryToSet]: newScore}) // update a score without changing the original one
const addMinistryScore = ministryToAdd => toAdd => scores => setMinistryScore(ministryToAdd)(scores[ministryToAdd]+toAdd)(scores) // add a score without changing the original one
const addMinistryScores = adds => scores => Object.keys(adds).reduce((scores2, key) => addMinistryScore(key)(adds[key])(scores), scores) // add multiple scores in the format of like {miniplenty: 3, miniluv: 2}
const ministryDangerLvl = 5
const getDangerous = ministryToCheck => Object.keys(ministryToCheck).filter(x => ministryToCheck[x] < -ministryDangerLvl || ministryToCheck[x] > ministryDangerLvl) // get which ones are DANGEROUS
