// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*_-+=";
  const passLength = prompt("enter password length")
  console.log(passLength)
  if (passLength < 8 || passLength > 128 || passLength === "") {
    alert("password must be between 8 and 128 characters")
    return "please try again";
  }
  let totalStri = ""
  if (confirm("Include lowercase letter?")) {
    totalStri += lower
  }
  if (confirm("Include uppercase letter?")) {
    totalStri += upper
  }
  if (confirm("Include numbers?")) {
    totalStri += numbers
  }
  if (confirm("Include special characters?")) {
    totalStri += symbols
  }
  if(totalStri===""){
    alert("must select one chcaracter type")
    return "please try again"
  }
  var passStri=""
  for(var i=0;i<passLength;i++){
   var index=Math.floor(Math.random()*totalStri.length)
   var digit=totalStri[index]
   passStri+=digit
  }
  return passStri
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


