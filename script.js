var testName = "buhbuhbuh"
var content = "thing breaker i hate the chinese lah balhufwe fwejiofjwe"
addCommand(testName, content)
dragElement(document.getElementById("clock"))


var currentTool = 'scratch'
//AVAILABLE TOOLS 'scratch' 'replace'

var replaceToolWord = 'Press enter to edit'
document.getElementById("text").textContent = replaceToolWord;
//bounds, init x pos, init y pos, end x, end y
var memoryHoleBounds = document.getElementById("memoryhole").getBoundingClientRect()
var luvBounds = document.getElementById("miniluv").getBoundingClientRect()
var paxBounds = document.getElementById("minipax").getBoundingClientRect()
var trueBounds = document.getElementById("minitrue").getBoundingClientRect()
var plentyBounds = document.getElementById("miniplenty").getBoundingClientRect()

var boundsList = [[memoryHoleBounds, 'memoryhole'], [luvBounds, 'miniluv'], [paxBounds,'minipax'],[trueBounds, 'minitrue'], [plentyBounds, 'miniplenty']]

document.body.onresize = updateBoundaries;
function updateBoundaries(){
  console.log("updating boundaries")
  memoryHoleBounds = document.getElementById("memoryhole").getBoundingClientRect()
  luvBounds = document.getElementById("miniluv").getBoundingClientRect()
  paxBounds = document.getElementById("minipax").getBoundingClientRect()
  plentyBounds = document.getElementById("miniplenty").getBoundingClientRect()
  trueBounds = document.getElementById("minitrue").getBoundingClientRect()

  boundsList = [[memoryHoleBounds, 'memoryhole'], [luvBounds, 'miniluv'], [paxBounds,'minipax'],[trueBounds, 'minitrue'], [plentyBounds, 'miniplenty']]; //inefficient but am lazy
} 


//CLOCK

var typingBoolean = false;
var typeStuff = ""
window.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        if(typingBoolean){
          replaceToolWord = typeStuff
          typeStuff = ""
        }
        typingBoolean = !typingBoolean
    } else{
      if(typingBoolean){
        typeStuff += e.key
        document.getElementById("text").textContent = typeStuff
      }
      
    }
});

function checkWithinBoundaries(elmnt, e){
  mouseX = e.clientX
  mouseY = e.clientY
  
  var bounded
  for(let i = 0; i < boundsList.length; i++){
    if(mouseX >= boundsList[i][0].left 
    && mouseX <= boundsList[i][0].right
    && mouseY >= boundsList[i][0].top
    && mouseY <= boundsList[i][0].bottom){
      bounded = boundsList[i][1];
    }
  }
  console.log(bounded)

  switch(bounded){
    case 'miniluv':
      console.log(bounded)
      //something
      break;
    case 'minipax':
      console.log(bounded)
      //something
      break;
    case 'miniplenty':
      console.log(bounded)
      //something
      break;
    case 'minitrue':
      console.log(bounded)
      //something
      break;
    case 'memoryhole':
      document.body.removeChild(elmnt);




  }
  /*
  if(mouseX >= memoryHoleBounds.left && mouseX <= memoryHoleBounds.right
  && mouseY >= memoryHoleBounds.top && mouseY <= memoryHoleBounds.bottom){
    document.body.removeChild(elmnt);
  }
  */
}

function createContent(rawString){
  var words = rawString.split(" ");
  
  var newContent = '';
  for(let i = 0; i < words.length; i++){
    //newContent += '<div' + 'id = ' + i + '>'  + words[i] + ' </div>'
    newContent += '<div' + ' class = inner' + '>'  + words[i] + '</div>'
    newContent += '<div style = display:inline> </div>'
    //FUCKING BALD 
    //changing text size
  }
  return newContent
}

//8.5x11 1 inch margins 6.5x9

function addCommand (name, rawString) { 
  var newCommand = document.createElement("div");
  newCommand.id = name; 
  newCommand.className = 'command'

  newCommand.innerHTML = createContent(rawString);
  var wordDivs = newCommand.querySelectorAll('.inner')
  for(let i = 0; i < wordDivs.length; i++){
    wordDivs[i].dataset.tooled = 'unchanged'
    tool(wordDivs[i]);
  }
  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("desk"); 
  document.body.insertBefore(newCommand, currentDiv); 
  dragElement(newCommand);
}



function tool(elmnt){
  elmnt.onmousedown = toolMouseDown;

  function toolMouseDown(e){
    if(elmnt.dataset.tooled == 'unchanged'){
      switch(currentTool){
        case 'scratch':
          elmnt.style["background-color"] = '#000000'
          elmnt.dataset.tooled = 'scratched'
          break
        case 'replace':
          //var wordLength = elmnt.innerHTML.length
          //FIX LATER TO NOT CHANGE SIZE     
          //get thsi to wokr 
          /*
          if(elmnt.style["background-color"] == 'transparent'){
            console.log('bald')
          } else{
            elmnt.style["background-color"] = '#ffffff'
            elmnt.innerHTML = replaceToolWord
          }
          */
          
          //what if replaceToolWord is bigger
          elmnt.style["background-color"] = '#ffffff'
            
          if(elmnt.innerHTML.length >= replaceToolWord.length){
            elmnt.style["background-color"] = '#ffffff'
            var x = ''
            for(let i = 0; i < (elmnt.innerHTML.length - replaceToolWord.length-1)/2; i ++){
              x += '&nbsp'
            }
            if((elmnt.innerHTML.length - replaceToolWord.length)%2 == 1){
              elmnt.innerHTML = x + replaceToolWord + x + '&nbsp'
            } else{
              elmnt.innerHTML = x + replaceToolWord + x
            }
          } else{
            console.log('stuff')
            //elmnt.style.display = 'inline-block'
            //elmnt.style.marginBottom = '-1em'
            //elmnt.style.transformOrigin = "0 0"
            //elmnt.style.verticalAlign = 'top;'
            //elmnt.style.fontStretch = '20%'
            //doesn't work with courier
            //elmnt.style.fontSize = "2em"
            //elmnt.style.transform = "scaleY(0.5)";

            elmnt.innerHTML = replaceToolWord
            //FIX THIS
          }
          elmnt.dataset.tooled = 'replaced'
          break
        default:
          console.log('something be bricked');
      }
    }
      
  }
}


/*
function activateWithinBounds(elmnt){
  elmnt.onmouseup = activateEffect;
  
  function activateEffect(e){
    console.log("pepeg")
    if(!mouseDown){
      return;
    }
    console.log("look at me")
    e.preventDefault();
    document.body.removeChild(heldCommand)
  }
}
*/


/*
makeToolReplace2(document.getElementById('replaceTool'))
*/
document.getElementById('replaceToolHitbox').onclick = makeToolReplace;
document.getElementById('replaceTool').onclick = makeToolReplace;
function makeToolReplace(e) {
  e.preventDefault();
  currentTool = 'replace';
  console.log(currentTool)
}

document.getElementById('scratchTool').onclick = makeToolScratch;
function makeToolScratch(e) {
  e.preventDefault();
  currentTool = 'scratch';
  console.log(currentTool)
}



/*
function makeToolReplace2(elmnt){
  elmnt.onmousedown = makeToolReplace;
  
}*/

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement(e) {
    checkWithinBoundaries(elmnt, e)
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

setTimeout(function() { updateBoundaries(); }, 1000);