//Function 1
const getRandomArray = (length, min, max) => {
  let randomArr = [];
  for (let i = 0; i < length; i++) {
    randomArr[i] = Math.round(Math.random() * (max - min) + min);
  }
  return randomArr;
};

console.log("Функція 1", getRandomArray(15, 1, 100));

//Function 2
const getModa = (...numbers) => {
  const numbersArr = [...numbers].filter((number) => {
    return Math.trunc(number) === number;
  });
  let modaArr;
  let maxCount = 0;
  for (let i = 0; i < numbersArr.length; i++) {
    let counter = 0;
    for (let k = i; k < numbersArr.length; k++) {
      if (numbersArr[i] === numbersArr[k]) {
        ++counter;
      }
    }
    if (counter > maxCount) {
      maxCount = counter;
      modaArr = numbersArr[i];
    }
  }
  return modaArr;
};

console.log(
  "Функція 2",
  getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
);

//Function 3
const getAverage = (...numbers) => {
  const averageNum = [...numbers].filter((number) => {
    return Math.trunc(number) === number;
  });
  const total = averageNum.reduce((total, number) => {
    return total + number;
  }, 0);
  const average = total / averageNum.length;
  return average;
};
console.log(
  "Функція 3",
  getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
);

//Function 4
const getMedian = (...numbers) => {
  const median = [...numbers]
    .filter((number) => {
      return Math.trunc(number) === number;
    })
    .sort((a, b) => a - b);
  return median.length % 2 === 1
    ? median[Math.floor(median.length / 2)]
    : (median[median.length / 2] + median[median.length / 2 - 1]) / 2;
};
console.log(
  "Функція 4",
  getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
);

//Function 5
const filterEvenNumbers = (...numbers) => {
  const evenNumbers = [...numbers].filter((evenNum) => evenNum % 2 === 1);
  return evenNumbers;
};
console.log("Функція 5", filterEvenNumbers(1, 2, 3, 4, 5, 6));

//Function 6
const countPositiveNumbers = (...numbers) => {
  const positiveNumbers = [...numbers].filter((positiveNum) => positiveNum > 0);
  return positiveNumbers.length;
};
console.log("Функція 6", countPositiveNumbers(1, -2, 3, -4, -5, 6));

//Function 7
const getDevidedByFive = (...numbers) => {
  const devidedNumers = [...numbers].filter((devideNum) => devideNum % 5 === 0);
  return devidedNumers;
};
console.log(
  "Функція 7",
  getDevidedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
);
//Function 8
const replaceBadWords = (string) => {
  let badWord = ["fuck", "shit"];
  let withBadWordsArr = string.split(" ");
  const onlyGoodWordArr = withBadWordsArr.map((word) => {
    let newWord = "";
    for (let wordBad of badWord) {
      if (word.includes(wordBad)) {
        newWord = "*".repeat(wordBad.length) + word.slice(wordBad.length);
        break;
      } else {
        newWord = word;
      }
    }
    return newWord;
  });
  return onlyGoodWordArr.join(" ");
};
console.log("Функція 8", replaceBadWords("Are you fucking kidding?"));
