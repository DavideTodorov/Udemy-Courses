"use strict";

/*
Coding Challenge #4
    Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).

Your tasks:
    1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)

    2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) �

    3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').

    4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"

    5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)

    6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)

    7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)

    8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects �)
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

//1
console.log("\n=== Task 1:");

dogs.forEach(
  (dog) => (dog.recommendedFoodPorion = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

//2
console.log("\n=== Task 2:");

const sarahDog = dogs.find((dog) =>
  dog.owners.find((owner) => owner === "Sarah")
);

if (sarahDog.curFood <= sarahDog.recommendedFoodPorion * 0.9) {
  console.log("Sarah's dog is eating too litle");
} else if (sarahDog.curFood >= sarahDog.recommendedFoodPorion * 1.1) {
  console.log("Sarah's dog is eating too much");
} else {
  console.log("Sarah's dog is eating well");
}

//3
console.log("\n=== Task 3:");
const checkIfDogEatsTooMuch = function (dog) {
  return dog.curFood >= dog.recommendedFoodPorion;
};

const checkIfDogEatsTooLittle = function (dog) {
  return dog.curFood < dog.recommendedFoodPorion;
};

const ownersEatTooMuch = dogs
  .filter((dog) => checkIfDogEatsTooMuch(dog))
  .flatMap((dog) => dog.owners.flat());

const ownersEatTooLittle = dogs
  .filter((dog) => checkIfDogEatsTooLittle(dog))
  .flatMap((dog) => dog.owners.flat());

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

//4
console.log("\n=== Task 4:");

console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

//5
console.log("\n=== Task 5:");

console.log(dogs.some((dog) => dog.curFood === dog.recommendedFoodPorion));

//6
console.log("\n=== Task 6:");

const doesDogEatOkay = function (dog) {
  return (
    dog.curFood >= dog.recommendedFoodPorion * 0.9 &&
    dog.curFood <= dog.recommendedFoodPorion * 1.1
  );
};

console.log(dogs.some((dog) => doesDogEatOkay(dog)));

//7
console.log("\n=== Task 7:");

const dogsEatOkay = dogs.filter((dog) => doesDogEatOkay(dog));
console.log(dogsEatOkay);

//8
console.log("\n=== Task 8:");

const dogsArrSortedCopy = dogs
  .slice()
  .sort((d1, d2) => d1.recommendedFoodPorion - d2.recommendedFoodPorion);

console.log(dogsArrSortedCopy);
