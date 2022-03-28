 // Assignment code here
var passwordOptions = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

var getRandomLower = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

var getRandomUpper = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

var getRandomUpper = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

var getRandomNumber = function() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

var getRandomSymbol = function() {
  var symbols = '!@#$%^&*()_+{}[]\;:,./'
  return symbols[Math.floor(Math.random() * symbols.length)];
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var passwordCriteria = function() {
  var length = window.prompt("How many characters would you like your password to be?");
  var lower = window.confirm("Would you like your password to have lowercase letters?");
  var upper = window.confirm("Would you like your password to have uppercase letters?");
  var number = window.confirm("Would you like your password to have numbers?");
  var special = window.confirm("Would you like your password to have special characters?");
}

var generatePassword = function() {
  

  passwordLength = parseInt(length);

  console.log(passwordLength);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);