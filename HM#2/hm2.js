let numberN = +prompt("Введіть ціле початкове число N:");
while (!Number.isInteger(numberN)) {
  numberN = +prompt("Введене число повинне бути цілим. Введіть число ще раз:");
}

let numberM = +prompt("Введіть друге ціле число M:");
while (!Number.isInteger(numberM)) {
  lastNumber = +prompt(
    "Введене число повинне бути цілим. Введіть число ще раз:"
  );
}
while (numberM < numberN) {
  numberM = +prompt(
    "Друге число повиннне бути більшим за перше, введіть число ще раз:"
  );
}

const numbersForAddition = confirm("Складаємо парні чи непарні числа?");

let resultOfAddition = 0;
for (let i = numberN; i <= numberM; i++) {
  if (numbersForAddition && i % 2 === 0) continue;
  resultOfAddition += i;
}
console.log("результат складання чисел= ", resultOfAddition);
