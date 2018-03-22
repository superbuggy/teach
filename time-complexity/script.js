const pageConsole = document.querySelector('code')
const wholeNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const times = {
  single: [],
  quadratic: [],
  cubic: []
}

new Array(...document.querySelectorAll('button')).forEach(button => {
  console.log(button.id)
  button.addEventListener('click', _ => handleClick(button.id))
})

function handleClick (funcName) {
  let func = eval(funcName)
  pageConsole.innerHTML = ''
  const milliseconds = measureTime(func).toFixed(3)
  const time = `<span class="time">Ran in ${milliseconds} milliseconds</span>`
  times[funcName].push(time)
  consoleWrite(time)
  pageConsole.scrollTo(0, pageConsole.scrollHeight)
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
  pageConsole.innerHTML = ''
  let start = window.performance.now()
  console.time(func.name)
  func()
  console.timeEnd(func.name)
  let end = window.performance.now()
  console.log(start, end, end - start)
  return end - start
}
