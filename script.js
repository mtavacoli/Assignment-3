// Assignment code here

// I WANT to randomly generate a password that meets certain criteria
// User clicks generate password button

// Atleast 8 characters, but no more than 128 characters
// ALERT PROMPT CONFIRM
//Use a prompt to get info on what the user wants the password to be like
// INPUT types
// Whether the user wants lowercase, uppercase, numerical, and/or special characters
//Use a confirm to get info on what characters the user wants

// Site will generate a random password for the user

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("generatePassword");
  return "oft he king";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
