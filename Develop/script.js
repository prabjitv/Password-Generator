// 1. when generate clicked, prompt 5 times.
// 2. store answers, one as a number, the rest as Boolean.;
// 3. check to see if user inputs fall inside requirements
// 4. output password








// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// DOM Elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

// Generate event listen
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  // or use parseInt if I want a number
  // Boolean checking
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolseEl.checked;
  
  resultEl.innerText = generatePassword(haslower, hasUpper, hasNumber, hasSymbol, length);
});




// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
  // 1. Init pswd var
  // 2. Filter out unchecked categories
  // 3. Loop over length and call generator function for each type
  // 4. Add final pswd to the pswd var and return

  let generatePassword = '';

  const typesCount = lower + upper + number + symbol;

  console.log('typesCount: ', typesCount);
  
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    item => Object.values(item)[0]
  );

  console.log('typesArr: ', typesArr);

  if(typesCount === 0) {
    return '';
  }

for (let i = 0, i < length; i += typesCount) {
  typesArr.forEach(type => {
    const funcName = Object.keys(type)[0];
    console.log('funcName: ', funcName);

    generatedPassword += randomFunc[funcName]();
  });
}

const finalPassword = generatedPassword.slice(0, length);
return finalPassword
}


// Generator functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = `!@#$%^&*(){}[]=,./<>-_`;
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomLower());
console.log(getRandomSymbol());