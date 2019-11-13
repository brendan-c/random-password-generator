const random = (max) => Math.floor(Math.random() * max)

function getRandomChar(range, start){
  return String.fromCharCode(random(range) + start)
}

const symbols = '`!@#$%^&*()_+-=[]{}|;\':",./<>?'
const getSymbol = () => symbols[random(symbols.length)]

const getLower = () => getRandomChar(26, 97)
const getUpper = () => getRandomChar(26, 65)
const getNumber = () => getRandomChar(10, 48)

const options = {
  lower: getLower,
  upper: getUpper,
  number: getNumber,
  symbol: getSymbol
}

function generatePassword(params, length) {
  return Array.from(new Array(length).keys())
    .map(() => {
      let randomParam = params[random(params.length)]
      return options[randomParam]()
    }).join('')
}

// generatePassword(['upper'], 5)
