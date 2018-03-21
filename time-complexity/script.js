document
  .querySelector('#simple')
  .addEventListener('click', () => {
    const time = `Ran in ${measureTime(logArray).toFixed(3)} milliseconds`
    consoleWrite(time)
  })

document
  .querySelector('#quadratic')
  .addEventListener('click', () => {
    const time = `Ran in ${measureTime(twoNested).toFixed(3)} milliseconds`
    consoleWrite(time)
  })

document
  .querySelector('#cubic')
  .addEventListener('click', () => {
    const time = `Ran in ${measureTime(threeNested).toFixed(3)} milliseconds`
    consoleWrite(time)
  })

const pageConsole = document.querySelector('code')
const wholeNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function logArray () {
  consoleWrite('Logging array...', true)
  for (var i = 0; i < wholeNumbers.length; i++) {
    consoleWrite(wholeNumbers[i])
  }
  consoleWrite('Done...', true)
}

function consoleWrite (message, newLine) {
  pageConsole.innerHTML += newLine ? `<br/> ${message} <br/>` : `${message}`
}

function twoNested () {
  for (var i = 0; i < wholeNumbers.length; i++) {
    consoleWrite('in twoNested, iterating over: ' + wholeNumbers[i], true)
    logArray()
  }
}

function threeNested () {
  for (var i = 0; i < wholeNumbers.length; i++) {
    consoleWrite('in threeNested, iterating over: ' + wholeNumbers[i], true)
    twoNested()
  }
}

// a way to measure time and execute the function
function measureTime (func) {
  let start = window.performance.now()
  console.time(func.name)
  func()
  console.timeEnd(func.name)
  let end = window.performance.now()
  console.log(start, end, end - start)
  return end - start
}
