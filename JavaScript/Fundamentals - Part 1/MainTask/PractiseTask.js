const country = "Bulgaria";
const continent = "Europe";
let population = 6500000;
const isIsland = false;
const language = "Bulgarian";

console.log("Country name: " + country);
console.log("Continent name: " + continent);
console.log("Population: " + population);
console.log("Is island: " + isIsland);
console.log("Language: " + language);

console.log("Half of the population: " + population / 2);
console.log("Does my country have bigger population than Finland? ", population > 6000000);
console.log("Does my country has less than average population? ", population < 33000000);

const coutryDescription = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(coutryDescription);


let populationMessage;
const averagePopulation = 33000000;

if (population > averagePopulation) {
    populationMessage = `${country}'s population is above average.`;
} else {
    const populationBelowAverage = averagePopulation - population;
    populationMessage = `${country}'s population is ${populationBelowAverage} below average.`;
}

console.log(populationMessage);


//The same with thernany operator
console.log(`${country}'s population is ${population > 33000000 ? "above" : "below"} average!`);


const numOfCountryNeighbours = 3; //Number(prompt('How many neighbour countries does your country have?'));
if (numOfCountryNeighbours === 1) {
    console.log("Only 1 border!");
} else if (numOfCountryNeighbours > 1) {
    console.log("More than 1 border!");
} else {
    console.log("No borders.")
}


let isSiutableCountry;
if (language === "English" && population < 50000000 && !isIsland) {
    isSiutableCountry = `You should live in ${country}`;
} else {
    isSiutableCountry = `${country} doesn't meet your criteria.`;
}
console.log(isSiutableCountry);



/*Use a switchs tatement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all othersimply log 'Great language too :D'
*/

let inputLanguage = prompt("Enter language");

switch (inputLanguage) {
    case "chinese":
    case "mandarin":
        console.log(inputLanguage + ' MOST number of native speakers!');
        break;
    case "spanish":
        console.log('Spanish: 2nd place in number of native speakers');
        break;
    case "english":
        console.log(inputLanguage + ": 3rd place");
        break;
    case " hindi":
        console.log(inputLanguage + ": Number 4");
        break
    case "arabic":
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
        break;
}