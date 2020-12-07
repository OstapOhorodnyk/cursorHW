const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];
const girlsNames = ["Олена", "Іра", "Світлана"];
//1.розділення
const divisionIntoPairs = (students) => {
  const studentsGirls = [];
  const studentsBoys = [];
  const coupleOfStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (girlsNames.includes(students[i])) {
      studentsGirls.push(students[i]);
    } else {
      studentsBoys.push(students[i]);
    }
  }
  for (let i = 0; i < girlsNames.length; i++) {
    coupleOfStudents[i] = [studentsBoys[i], studentsGirls[i]];
  }
  return coupleOfStudents;
};

const arrayCoupleOfStudents = (coupleOfStudents) => {
  for (let i = 0; i < coupleOfStudents.length; i++) {
    coupleOfStudents[
      i
    ] = `${coupleOfStudents[i][0]} i ${coupleOfStudents[i][1]}`;
  }
  return coupleOfStudents;
};
//2.пари та теми
const studentsAndThemes = (students, themes) => {
  const pairsAndthemes = [];
  const projects = [...themes];
  const ArrayWithPairsOfStudents = [
    ...arrayCoupleOfStudents(divisionIntoPairs(students)),
  ];
  for (let i = 0; i < ArrayWithPairsOfStudents.length; i++) {
    pairsAndthemes[i] = [ArrayWithPairsOfStudents[i], projects[i]];
  }
  return pairsAndthemes;
};
//3.Зіставте оцінки зі студентом
const assessmentOfStudentPairs = (students, marks) => {
  const arrayAssessmentOfStudentPairs = [];
  for (let i = 0; i < students.length; i++) {
    arrayAssessmentOfStudentPairs[i] = [students[i], marks[i]];
  }
  return arrayAssessmentOfStudentPairs;
};
//4.випадкова оцінка
const getRandomNumber = () => {
  const randomNumber = +(Math.random() * 4 + 1).toFixed();
  return randomNumber;
};
const randomEstimates = (pairsAndThemes) => {
  const estimatesPairsOfStudents = [];
  for (let i = 0; i < pairsAndThemes.length; i++) {
    estimatesPairsOfStudents[i] = [pairsAndThemes[i], getRandomNumber()];
  }
  return estimatesPairsOfStudents;
};

console.log(
  "1. Роподіл студентів на пари:  " + divisionIntoPairs(students).join("  |  ")
);
console.log(
  "2. Роподіл пар студентів по темам навчання:  " +
    studentsAndThemes(students, themes).join(" | ")
);
console.log(
  "3. Зіставте оцінки зі студентом:  " +
    assessmentOfStudentPairs(students, marks).join(" | ")
);
console.log(
  "4. Випадкова оцінка:  " +
    randomEstimates(studentsAndThemes(students, themes)).join(" | ")
);
