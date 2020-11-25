//функція 1

function getMaxDigit(...number) {
  const string = String(number).split("");
  let maxNumber = "";
  for (let i of string) {
    if (Number(i)) {
      maxNumber += Number(i);
    }
  }
  return Math.max(...maxNumber);
}
//функція 2
const powNumber = (number, power) => {
  let result = number;

  for (let i = 1; i < power; i++) {
    result *= number;
  }

  return result;
};
//функція 3
const formatName = (name) => {
  const formatedName = name[0].toUpperCase() + name.substring(1).toLowerCase();
  return formatedName;
};
//функція 4
const countClearProfit = function (salary, ...taxes) {
  let totalTax = taxes.reduce((total, current) => total + current);
  const clearProfit = (salary / 100) * (100 - totalTax);

  return clearProfit;
};
//функція 5
const getRandomNumber = (firstNumber, lostNumber) => {
  const randomNumber =
    Math.floor(Math.random() * (lostNumber - firstNumber + 1)) + firstNumber;
  return randomNumber;
};
//функція 6
const countLetter = (letterSearch, string) => {
  let counter = 0;
  const splitedString = string.split("");

  for (let letter of splitedString) {
    if (letter.toLowerCase() === letterSearch.toLowerCase()) {
      counter++;
    }
  }

  return counter;
};
//функція 7
const convertCurrency = (currency) => {
  const buyDollarCost = 28.5;
  const sellDollarCost = 28.1;
  let result = "";

  if (currency.toUpperCase().includes("UAH")) {
    result = +currency.split("UAH")[0] / buyDollarCost;
  } else if (currency.toUpperCase().includes("$")) {
    result = +currency.split("$")[0] * sellDollarCost;
  }

  return result;
};
//функція 8
const getRandomPassword = (passwordNumber = 8) => {
  const numbers = "0123456789";
  let password = "";

  for (let i = 0; i < passwordNumber; i++) {
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  return password;
};
//функція 9
const deleteLetters = (deleteLetter, string) => {
  let formatedString = "";

  const splitedString = string.split("");
  for (let letter of splitedString) {
    if (letter !== deleteLetter) {
      formatedString += letter;
    }
  }

  return formatedString;
};
//функція 10
const isPalyndrom = (string) => {
  const modyfiedString = string.split(" ").join("").toLowerCase();
  const reverseString = modyfiedString.split("").reverse().join("");
  return modyfiedString === reverseString;
};
//функція 11
const deleteDuplicateLetter = (string) => {
  const modyfiedString = string.toLowerCase().split("");
  let result = "";

  for (let letter of modyfiedString) {
    if (
      string.toLowerCase().indexOf(letter) ===
      string.toLowerCase().lastIndexOf(letter)
    ) {
      result += letter;
    }
  }

  return result;
};

console.log(`
Функція №1: ${getMaxDigit(9538, 8)}
Функція №2: ${powNumber(6, 3)}
Функція №3: ${formatName("OsTaP")}
Функція №4: ${countClearProfit(21000, 18, 1.5)}
Функція №5: ${getRandomNumber(1, 10)}
Функція №6: ${countLetter("а", "Амстердам")}
Функція №7: ${convertCurrency("100$")}
Функція №8: ${getRandomPassword()}
Функція №9: ${deleteLetters("b", "bla-bla-car")}
Функція №10: ${isPalyndrom("Я несу гусеня")}
Функція №11: ${deleteDuplicateLetter(
  "Vodafone - кращий мобільний оператор України:-)"
)}
`);
