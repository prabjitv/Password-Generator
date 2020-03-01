// 1. when generate clicked, prompt 5 times.
// 2. store answers, one as a number, the rest as Boolean.;
// 3. check to see if user inputs fall inside requirements
// 4. output password


// sections
// 1. declare var
// 2. make func
// 3. run func


// Assignment Code
var generateBtn = document.querySelector("#generate");
var howLong;
var lower;
var upper;
var number;
var symbol;

var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charSym = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", ",", ".", "/", "?", ]
var charSet = [charLower, charUpper, charNum, charSym];

function generatePassword () {
  if (lower === "y") {
    getRandomLower();
  }
  // if (upper === "y") {
  //   getRandomUpper();
  // }
  // if (number === "y") {
  //   getRandomNumber();
  // }
  // if (symbol === "y") {
  //   getRandomSymbol();
  // }
    
}

// Look up later: arrayChar.map()

function getRandomLower() {
  return console.log(Math.floor(Math.random(charLower) * 26));
}
// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }
// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }
// function getRandomSymbol() {
//   var symbols = `!@#$%^&*(){}[]=,./<>-_`;
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }


console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());

// function getRandomLower() {
  //   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  // }
  // function getRandomUpper() {
  //   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  // }
  // function getRandomNumber() {
  //   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  // }
  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


generateBtn.addEventListener("click", function () {
  howLong = prompt("Enter the number length of the password you'd like.");
  lower = prompt("Use lowercase? Choose Y or N");
  upper = prompt("Use UPPERCASE? Choose Y or N");
  number = prompt("Use numbers? Choose Y or N");
  symbol = prompt("Use symbols? Choose Y or N");

  console.log(howLong);
  console.log(lower);
  console.log(upper);
  console.log(number);
  console.log(symbol);
  writePassword()
});




// // Generate event listen
// generateEl.addEventListener('click', () => {
//   var length = +lengthEl.value;
//   // or use parseInt if I want a number
//   // Boolean checking
//   var hasLower = lowercaseEl.checked;
//   var hasUpper = uppercaseEl.checked;
//   var hasNumber = numbersEl.checked;
//   var hasSymbol = symbolseEl.checked;


// // DOM Elements
// var resultEl = document.getElementById('result');
// var lengthEl = document.getElementById('length');
// var uppercaseEl = document.getElementById('uppercase');
// var lowercaseEl = document.getElementById('lowercase');
// var numbersEl = document.getElementById('numbers');
// var symbolsEl = document.getElementById('symbols');
// var generateEl = document.getElementById('generate');
// var clipboardEl = document.getElementById('clipboard');

// var randomFunc = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   symbol: getRandomSymbol,
// }

// // Generate event listen
// generateEl.addEventListener('click', () => {
//   var length = +lengthEl.value;
//   // or use parseInt if I want a number
//   // Boolean checking
//   var hasLower = lowercaseEl.checked;
//   var hasUpper = uppercaseEl.checked;
//   var hasNumber = numbersEl.checked;
//   var hasSymbol = symbolseEl.checked;

//   resultEl.innerText = generatePassword(haslower, hasUpper, hasNumber, hasSymbol, length);
// });




// // Generate password function
// function generatePassword(lower, upper, number, symbol, length) {
//   // 1. Init pswd var
//   // 2. Filter out unchecked categories
//   // 3. Loop over length and call generator function for each type
//   // 4. Add final pswd to the pswd var and return

//   var generatePassword = '';

//   var typesCount = lower + upper + number + symbol;

//   console.log('typesCount: ', typesCount);

//   var typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
//     item => Object.values(item)[0]
//   );

//   console.log('typesArr: ', typesArr);

//   if(typesCount === 0) {
//     return '';
//   }

// for (var i = 0, i < length; i += typesCount) {
//   typesArr.forEach(type => {
//     var funcName = Object.keys(type)[0];
//     console.log('funcName: ', funcName);

//     generatedPassword += randomFunc[funcName]();
//   });
// }

// var finalPassword = generatedPassword.slice(0, length);
// return finalPassword
// }


// // Generator functions

// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }
// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }
// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }
// function getRandomSymbol() {
//   var symbols = `!@#$%^&*(){}[]=,./<>-_`;
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }

