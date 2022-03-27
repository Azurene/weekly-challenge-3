// Assignment code here
var createdPassword = {
  length: 0,
  lowercase: false,
  uppercase: false,
  numeric: false,
  special: false,
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var generatePassword = function() {
  // ask for length of password
  var passwordLength = window.prompt("How many characters would you like your password to be?");
  passwordLength = createdPassword.length
  // choose length between 8 and 128 characters
  if (createdPassword.length > 8  || createdPassword.length < 128) {
    
  }
  // ask for character types
  // ask lowercase
  var confirmLowercase = window.confirm("Would you like your password to have lowercase letters?");
  if (confirmLowercase === true) {
    createdPassword.lowercase = true;
  }
  // ask uppercase
  var confirmUppercase = window.confirm("Would you like your password to have uppercase letters?");
  if (confirmUppercase === true) {
    createdPassword.uppercase = true;
  }
  // ask numeric
  var confirmNumeric = window.confirm("Would you like your password to have numbers?");
  if (confirmNumeric === true) {
    createdPassword.numeric = true;
  }
  // ask special characters
  var confirmSpecial = window.confirm("Would you like your password to have special characters?");
  if (confirmSpecial === true) {
    createdPassword.special = true;
  }
  console.log(createdPassword);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);