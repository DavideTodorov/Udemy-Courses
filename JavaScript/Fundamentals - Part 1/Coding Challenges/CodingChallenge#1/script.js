const marksWeight = 78;
const marksHeight = 1.69;

const johnsWeight = 92;
const johnsHeight = 1.95;

const marksBMI = marksWeight / marksHeight ** 2;
const johnsBMI = johnsWeight / johnsHeight ** 2;
const isMarksBMIHigher = marksBMI > johnsBMI;

console.log("Mark's BMI: " + marksBMI);
console.log("John's BMI: " + johnsBMI);
console.log("Is Mark's BMI higher? " + isMarksBMIHigher);