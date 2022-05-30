// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// function to ask for password criteria
var passwordCriteria = function() {
  var length = window.prompt("How many characters would you like your password to be?");
  var lower = window.confirm("Would you like your password to have lowercase letters?");
  var upper = window.confirm("Would you like your password to have uppercase letters?");
  var number = window.confirm("Would you like your password to have numbers?");
  var special = window.confirm("Would you like your password to have special characters?");
  generatePassword(length, lower, upper, number, special);
};

// function to generate password
var generatePassword = function(length, lower, upper, number, special) {
  var password = ""
  var passwordArr = [];
  var passwordText = document.querySelector("#password");
  // if lowercase is true, adds lowercase letters to array
  if (lower) {
    passwordArr.push(...['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'])
  }

  // if uppercase letter is true, adds uppercase letters to array
  if (upper) {
    passwordArr.push(...['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z'])
  }

  // if numbers is true, adds numbers to array
  if (number) {
    passwordArr.push(...['1','2','3','4','5','6','7','8','9','0'])
  }

  // if special characters is adds them to array
  if (special) {
    passwordArr.push(...['!','@','#','$','%','^','&','*','(',')','-','='])
  }

  // based on length given, will create a random password based on the passwordArr
  for(var i = 0; i < length; i++) {
    password = password + passwordArr[Math.floor(Math.random() * passwordArr.length)];
  }

  passwordText.value = password;
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordCriteria);
