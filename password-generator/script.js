"use strict";

const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

const resultEl = document.getElementById("result");
const lengthInputEl = document.getElementById("length");
const generateBtn = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");
const settings = document.querySelectorAll(".setting");

clipboardEl.addEventListener("click", () => {
  const password = resultEl.textContent;

  if (!password) return;
  navigator.clipboard.writeText(password);
});

generateBtn.addEventListener("click", (e) => {
  const length = Number(lengthInputEl.value);

  const lowerIsChecked = lowercaseEl.checked;
  const upperIsChecked = uppercaseEl.checked;
  const symbolIsChecked = symbolsEl.checked;
  const numberIsChecked = numbersEl.checked;

  resultEl.textContent = generatePassword(
    lowerIsChecked,
    upperIsChecked,
    symbolIsChecked,
    numberIsChecked,
    length
  );
});

const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

function generatePassword(lower, upper, symbol, number, length) {
  let generatePassword = "";
  const typesCount = lower + upper + symbol + number; // 3
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0] === true
  );

  if (typesCount === 0) return;

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const [funcName] = Object.keys(type);
      generatePassword += `${randomFunction[funcName]()}`;
    });
  }

  const finalPassword = generatePassword.slice(0, length);
  return finalPassword;
}

function getRandomLower() {
  //generate a random num from 0-25
  const randomNum = Math.floor(Math.random() * 26);
  // Shift by 97 to get ASCII value for lowercase letters

  return String.fromCharCode(randomNum + 97);
}

function getRandomUpper() {
  // generate random num from 0-25
  const randomNum = Math.floor(Math.random() * 26);

  //Get the corresponding ASCII value for uppercase
  return String.fromCharCode(randomNum + 65);
}

function getRandomNumber() {
  // return random num from 0-9
  return Math.floor(Math.random() * 10);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.".split("");
  const randomIdx = Math.floor(Math.random() * symbols.length);
  return symbols[randomIdx];
}
