// Assignment code here
var passwordCharacteristics = [
  passwordLength = "",
  passwordLowercase = false,
  passwordUppercase = false,
  passwordNumeric = false,
  passwordSpecial = false,
  passwordOptions = {
    passwordLength 
  }
]
// test
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

// ask for password criteria
// how many characters should the password be?
var changeLength = window.prompt("How many characters would you like your password to be?");
passwordOptions.passwordLength = changeLength;
  
// what character types should be included?
  var generatePassword = function() {
    // include lowercase?
    var confirmLowercase = window.confirm("Would you like your password to have lowercase letters?");
    if (confirmLowercase) {
      passwordCharacteristics.passwordLowercase = true;
    }
    // include uppercase?
    var confirmUppercase = window.confirm("Would you like your password to have uppercase letters?");
    if (confirmUppercase) {
      passwordCharacteristics.passwordUppercase = true;
    }
    // include numeric characters?
    var confirmNumeric = window.confirm("Would you like your password to have numeric characters?");
    if (confirmNumeric) {
      passwordCharacteristics.passwordNumeric = true;
    }
    // add special characters?
    var confirmSpecial = window.confirm("Would you like your password to have special characters?");
    if (confirmSpecial) {
      passwordCharacteristics.passwordSpecial = true;
    }
    passwordText.value = password;
  }
  console.log(passwordCharacteristics);
};

generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
