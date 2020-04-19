// connection between real html paper and the internal paper object

// create html paper id from paper object id
const makeRealPaperId = paper => "paper" + paper.id
// create real html paper from paper object
// if one already exists, does nothing
const showRealPaper = paper => !document.getElementById(makeRealPaperId(paper)) && addCommand(makeRealPaperId(paper), paper.words.join(" "))
// change a paper object based on the changes made to the real html paper
// returns the new paper object
// jaden moment
const changePaperBasedOnRealPaper = realPaper => oldPaper => [...realPaper.children].reduce(
    ((t, child) =>
      (child.class != "inner") ? t
        : ((child["data-tooled"] == "unchanged") ? (t[0], t[1] + 1)
          : ((child["data-tooled"] == "replaced")
            ? (changePaperWord(elemNum)(child.innerHTML)(t[0]), t[1] + 1)
            : (censorPaperWord(elemNum)(t[0]), t[1] + 1)))) // only possible last option is censored
    (oldPaper, 0 /* number within list of current element */)
  )[0]
