const pageConsole = document.querySelector('code')
const timesDisplay = document.querySelector('div.times')
const wholeNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const times = {
  single: [],
  quadratic: [],
  cubic: []
}

new Array(...document.querySelectorAll('button')).forEach(button => {
  button.addEventListener('click', _ => handleClick(button.id))
})

function handleClick (funcName) {
  let func = window[funcName]
  pageConsole.innerHTML = ''
  const milliseconds = measureTime(func).toFixed(3)
  const timeRanSpan = `<span class="time">Ran in ${milliseconds} milliseconds</span>`
  updateTimes(funcName, milliseconds)
  consoleWrite(timeRanSpan, true)
  console.log(timeRanSpan, pageConsole)
  pageConsole.scrollTo(0, pageConsole.scrollHeight)
}

function updateTimes (funcName, time) {
  times[funcName].push(time)
  let mean = times[funcName]
    .map(Number)
    .reduce((sum, current) => sum + current, 0) / times[funcName].length
  const functionTimeDisplay = document.querySelector(`p.${funcName}`)
  console.log(functionTimeDisplay)
  functionTimeDisplay.innerHTML = `${mean.toFixed(3)} milliseconds`
}

function consoleWrite (message, newLine) {
  pageConsole.innerHTML += newLine ? `<br/> ${message} <br/>` : `${message}`
}

function single () {
  consoleWrite('in function <i>single</i>, logging array...', true)
  for (var i = 0; i < wholeNumbers.length; i++) {
    consoleWrite(wholeNumbers[i])
  }
  consoleWrite('Done...', true)
}

function quadratic () {
  for (var i = 0; i < wholeNumbers.length; i++) {
    consoleWrite('in function <i>quadratic</i>, outside of the innermost for-loop, iterating over: ' + wholeNumbers[i], true)
    single()
  }
}

function cubic () {
  for (var i = 0; i < wholeNumbers.length; i++) {
    consoleWrite('in function <i>cubic</i>, the outermost of 3 nested for-loops, iterating over: ' + wholeNumbers[i], true)
    quadratic()
  }
}

// a way to measure time and execute the function
function measureTime (func) {
  let start = window.performance.now()
  console.time(func.name)
  func()
  console.timeEnd(func.name)
  let end = window.performance.now()
  return end - start
}
