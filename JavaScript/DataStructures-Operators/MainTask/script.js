"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderMeal: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderdelivery: function ({ starterIndex, mainIndex, address, time }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
};

//==================
//Optional chaining:

//Variables
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = restaurant.openingHours;

for (const day of weekdays) {
  const message = `We open at ${openingHours[day]?.open ?? "closed"}`;
  console.log(message);
}

//Methods
console.log(restaurant.orderPasta?.(1, 2) ?? "No such method");

//Arrays
const arr = [{ name: "Dave", age: 20 }];
console.log(arr[0]?.name ?? "No such person");
console.log(arr[1]?.name ?? "No such person");

/*
//==============
//Array looping:
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const [index, element] of menu.entries()) {
  console.log(`${index + 1}: ${element}`);
}

//==================
//The Rest operator:
function findSum(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}

findSum(1, 2, 3);
findSum(1, 2, 3, 4, 5);
findSum(...[5, 6]);

function orderPizza(mainIngredient, ...others) {
  console.log(
    `You ordered pizza with main ingredient ${mainIngredient} and secondary ingredients: ${others.join(
      ", "
    )}.`
  );
}

orderPizza("Mushrooms", ...["Cheese", "Meat"]);


//====================
//The Spread operator:
const mainMenu = [...restaurant.mainMenu];
const mainMenuExtended = ["Gnocci", ...mainMenu, "Fish"];
console.log(mainMenuExtended);

//spread for passing arguments
function orderPasta(ingredient1, ingredient2, ingredient3) {
  console.log(
    `You ordered pasta with ${ingredient1}, ${ingredient2} and ${ingredient3}.`
  );
}

const ingredients = [];
for (let i = 1; i <= 3; i++) {
  const currIngredient = prompt(`Ingredient ${i}`);
  ingredients.push(currIngredient);
}

orderPasta(...ingredients);


//=======================
//Objects desctructuring:
const { name: restaurantName, openingHours } = restaurant;
console.log(restaurantName);
console.log(openingHours);

const {
  fri: { open: fridayOpen, close: fridayClose },
} = openingHours;

console.log(fridayOpen, fridayClose);

restaurant.orderdelivery({
  time: "22:00",
  starterIndex: 1,
  mainIndex: 2,
  address: "Via del Sole",
});

//=====================
//Arrays desctructuring:
let [starterMeal, mainMeal] = restaurant.orderMeal(1, 2);

console.log(starterMeal + ", " + mainMeal);

//Mutating
[starterMeal, mainMeal] = [mainMeal, starterMeal];
console.log(starterMeal + ", " + mainMeal);
*/
