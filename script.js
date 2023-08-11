let passwordLength = 8;

//for password types

let isUppercase = false;
let isNumbers = false;
let isSymbols = false;

let passwordRangeInputEle = document.getElementById("passRangeInput");
let passRangeValue = document.getElementById("passRangeValue");
let genBtn = document.getElementById("genBtn");
const passwordDisplay = document.getElementById("password");

const generatepassword = (passlength) => {
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = isUppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
  const numbers = isNumbers ? "0123456789" : "";
  const symbolsLetter = isSymbols ? "!@#$%^&*()_+" : "";

  const passwordChar =
    lowerCaseLetters + upperCaseLetters + numbers + symbolsLetter;

  //for storing password
  let password = "";
  for (let i = 0; i < passlength; i++) {
    const charIndex = Math.floor(Math.random() * passwordChar.length);
    password += passwordChar[charIndex];
  }
  return password;
};

passwordRangeInputEle.addEventListener("input", (e) => {
  passwordLength = +e.target.value;
  passRangeValue.innerHTML = passwordLength;
});

genBtn.addEventListener("click", () => {
  const upperCaseCheckEle = document.getElementById("uppercase");
  const numberCheckEle = document.getElementById("numbers");
  const symbolCheckEle = document.getElementById("symbols");

  isUppercase = upperCaseCheckEle.checked;
  isNumbers = numberCheckEle.checked;
  isSymbols = symbolCheckEle.checked;
  const password = generatepassword(passwordLength);
  passwordDisplay.innerHTML = password;
  console.log("password", password);
});

passwordDisplay.addEventListener("click", (e) => {
  if (e.target.innerText.length > 0) {
    navigator.clipboard
      .writeText(passwordDisplay.innerText)
      .then(() => {
        alert("copied to clipboard");
      })
      .catch((err) => {
        alert("couldnt copied to clipboard");
      });
  }
});
