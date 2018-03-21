document.querySelector('#simple').addEventListener('click', () => measureTime(logArray))
document.querySelector('#quadratic').addEventListener('click', () => measureTime(twoNested))
document.querySelector('#cubic').addEventListener('click', () => measureTime(threeNested))
document.querySelector('#quartic').addEventListener('click', () => measureTime(fourNested))
document.querySelector('code')
const wholeNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function logArray () {
  for (var i = 0; i < wholeNumbers.length; i++) {
    console.log(wholeNumbers[i])
  }
}

function twoNested () {
  for (var i = 0; i < wholeNumbers.length; i++) {
    console.log('in twoNested, iterating over:', wholeNumbers[i])
    logArray()
  }
}

function threeNested () {
  for (var i = 0; i < wholeNumbers.length; i++) {
    console.log('in threeNested, iterating over:', wholeNumbers[i])
    twoNested()
  }
}

function fourNested () {
  for (var i = 0; i < wholeNumbers.length; i++) {
    console.log('in fourNested', wholeNumbers[i])
    threeNested()
  }
}

// a way to measure time and execute the function
function measureTime (func) {
  console.time(func.name)
  func()
  console.timeEnd(func.name)
}
