//отримуємо перше число
let numberN = +prompt("Введіть ціле початкове число N:");
while (!Number.isInteger(numberN)) {
  numberN = +prompt("Введене число повинне бути цілим. Введіть число ще раз:");
}
//отримуємо друге число
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
//визначаємо які числа складувати
const numbersForAddition = confirm("Складаємо парні чи непарні числа?");
//основне складання
let resultOfAddition = 0;
for (let i = numberN; i <= numberM; i++) {
  if (numbersForAddition && i % 2 === 0) continue;
  resultOfAddition += i;
}
console.log("результат складання чисел= ", resultOfAddition);
