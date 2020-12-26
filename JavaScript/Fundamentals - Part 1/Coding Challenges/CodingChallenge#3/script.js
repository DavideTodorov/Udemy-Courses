const firstDolphinsScore = 97;
const secondDolphinsScore = 112;
const thirdDolphinsScore = 81;

const firstKoalasScore = 109;
const secondKoalasScore = 95;
const thirdKoalasScore = 86;


const dolphinsAverageScore = (firstDolphinsScore, secondDolphinsScore, thirdDolphinsScore) / 3;
const koalasAverageScore = (firstKoalasScore + secondKoalasScore + thirdKoalasScore) / 3;


let winner;

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
    winner = "Dolphins win!"

} else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100) {
    winner = "Koalas win!";

} else if (dolphinsAverageScore === koalasAverageScore && koalasAverageScore >= 100 &&      dolphinsAverageScore >= 100) {
    winner = "Both teams win!";

} else {
    winner = "There is no winner!";
}

console.log(winner);
