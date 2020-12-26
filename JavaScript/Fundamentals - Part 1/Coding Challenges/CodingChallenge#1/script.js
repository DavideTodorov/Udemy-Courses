const marksWeight = 78;
const marksHeight = 1.69;

const johnsWeight = 92;
const johnsHeight = 1.95;

const marksBMI = marksWeight / marksHeight ** 2;
const johnsBMI = johnsWeight / johnsHeight ** 2;
const isMarksBMIHigher = marksBMI > johnsBMI;

console.log(`Mark's BMI: ${marksBMI.toFixed(2)}`);
console.log(`John's BMI: ${johnsBMI.toFixed(2)}`);

let higherBMIMessage;

if (marksBMI > johnsBMI) {
    higherBMIMessage = `Mark's BMI (${marksBMI.toFixed(1)}) is higher than John's BMI (${johnsBMI.toFixed(1)})!`;
}else{
    higherBMIMessage = `John's BMI (${johnsBMI.toFixed(1)}) is higher than Mark's BMI (${marksBMI.toFixed(1)})!`;
}

console.log(higherBMIMessage);