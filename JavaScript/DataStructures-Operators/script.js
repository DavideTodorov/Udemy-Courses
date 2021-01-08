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
