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