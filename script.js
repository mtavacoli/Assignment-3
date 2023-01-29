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

function generatePassword() {}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Var To Upper Case ------------
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);
//--------------------------------------
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "[",
  "\\",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword() {
  // Ask four user Input
  passwordLength = prompt(
    "How many characters would you like your password? Choose between 8 and 128"
  );
  console.log("Password length " + passwordLength);

  if (!passwordLength) {
    alert("Required value");
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + passwordLength);
  } else {
    confirmLower = confirm("Will this contain lower case letters?");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("Will this contain upper case letters?");
    console.log("Upper case " + confirmUpper);
    confirmNumber = confirm("Will this contain numbers?");
    console.log("Number " + confirmNumber);
    confirmSpecial = confirm("Will this contain special characters?");
    console.log("Special Character " + confirmSpecial);
  }

  // No answer then
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    userChoices = alert("You must choose a criteria");
    // 4 true options
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, numbers, special);
    console.log(userChoices);
  }
  // 3 true options
  else if (confirmLower && confirmUpper && confirmNumber) {
    userChoices = lowerCase.concat(upperCase, numbers);
    console.log(userChoices);
  } else if (confirmLower && confirmUpper && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, special);
    console.log(userChoices);
  } else if (confirmLower && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(numbers, special);
    console.log(userChoices);
  } else if (confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = upperCase.concat(numbers, special);
    console.log(userChoices);
  }
  // 2 true options
  else if (confirmLower && confirmUpper) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  } else if (confirmLower && confirmNumber) {
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  } else if (confirmLower && confirmSpecial) {
    userChoices = lowerCase.concat(special);
    console.log(userChoices);
  } else if (confirmUpper && confirmNumber) {
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  } else if (confirmUpper && confirmSpecial) {
    userChoices = upperCase.concat(special);
    console.log(userChoices);
  } else if (confirmNumber && confirmSpecial) {
    userChoices = numbers.concat(special);
    console.log(userChoices);
  }
  // 1 true option
  else if (confirmLower) {
    userChoices = lowerCase;
    console.log(userChoices);
  } else if (confirmUpper) {
    userChoices = blankUpper.concat(upperCase);
    console.log(userChoices);
  } else if (confirmNumber) {
    userChoices = numbers;
    console.log(userChoices);
  } else if (confirmSpecial) {
    userChoices = special;
    console.log(userChoices);
  }

  // Empty variable for the password lenght
  var passwordBlank = [];

  // Loop for random selection
  for (var i = 0; i < passwordLength; i++) {
    var allChoices =
      userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  // Join and return the password
  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
}
