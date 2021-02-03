const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];
// 1. list of subjects
function getSubjectsForStudent(student) {
  const subjList = Object.keys(student.subjects);
  return subjList.map(
    (subject) =>
      subject[0].toUpperCase() +
      subject.slice(1).toLowerCase().replace("_", " ")
  );
}
console.log("list of subjects: ", getSubjectsForStudent(students[2]));

// 2. Average Mark
const getAverageMark = (student) => {
  const averageArr = Object.values(student.subjects).flat(Infinity);

  return parseFloat(
    (
      averageArr.reduce((total, mark) => total + mark, 0) / averageArr.length
    ).toFixed(2)
  );
};
console.log("Average Mark: ", getAverageMark(students[1]));

//3. Student Info
const getStudentInfo = (student) => {
  const { course, name } = student;
  return {
    course,
    name,
    averageMark: getAverageMark(student),
  };
};
console.log("Student Info: ", getStudentInfo(students[2]));

//4. Studends names
const getStudendsNames = (student) =>
  student.map((stud) => stud.name, 0).sort();
console.log("Studends names: ", getStudendsNames(students));

//5. Best student
const getBestStudent = (student) => {
  let bestMark = 0;
  const sortMark = student.reduce((bestStud, simpleStud) => {
    const averageMarkStud = getAverageMark(simpleStud);
    if (bestMark < averageMarkStud) {
      bestMark = averageMarkStud;
      return (bestStud = simpleStud.name);
    } else if (bestMark === averageMarkStud) {
      return (bestStud += simpleStud.name);
    }
  }, " ");
  return sortMark;
};
console.log("Best student: ", getBestStudent(students));

//6. Calculate 2ord letters
const calculateWordLetters = (string) => {
  const stringArr = string.split("");
  let resultLetters = {};
  stringArr.forEach((letter) => {
    resultLetters[letter]
      ? resultLetters[letter]++
      : (resultLetters[letter] = 1);
  });
  return resultLetters;
};
console.log("Calculate word letters: ", calculateWordLetters("експеліармус:)"));
