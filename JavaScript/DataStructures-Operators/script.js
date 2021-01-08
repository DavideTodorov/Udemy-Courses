"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Foccacia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  orderMeal: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//Arrays desctructuring:
let [starterMeal, mainMeal] = restaurant.orderMeal(1, 2);

console.log(starterMeal + ", " + mainMeal);

//switch positions by desctructuring
[starterMeal, mainMeal] = [mainMeal, starterMeal];
console.log(starterMeal + ", " + mainMeal);
