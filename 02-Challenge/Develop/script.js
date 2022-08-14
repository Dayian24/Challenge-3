const Characters = {
  capLet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowLet: "abcdefghijklmnopqrstuvwxyz",
  special: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  numb:"0123456789",
}



// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordSet = "";

  var length = prompt("Choose a length of at least 8 caracters and no more than 128 characters");
      console.log(length)

  var capLet = confirm("Would u like Caps?");
  if(capLet) {
    passwordSet += Characters.capLet
  }
  
  var lowLet = confirm("Would u like lowercase letters?");
  if(lowLet) {
    passwordSet += Characters.lowLet
  } 
  
  var special = confirm("Would u like Fancy Charecters?");
  if(special) {
    passwordSet += Characters.special
  }   

  var numb = confirm("Would u like Numbers?");
  if(numb) {
    passwordSet += Characters.numb
  }   

  var password = "";
  for (let i= 0; i < length; i++) {
  password += passwordSet[Math.floor(Math.random() * passwordSet.length)]
  
  }
  
  return password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





