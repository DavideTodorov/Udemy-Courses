"use strict";

// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
//   ]);

/*
//==============
//Array methods:

let arr = ["a", "b", "c", "d", "e"];
let arr2 = ["j", "i", "h", "g", "f"];

//Slice method
console.log(arr.slice(1, 3));
console.log(arr);

//Splice method
console.log(arr.splice(0, 2));
console.log(arr);

//Reverse method
console.log(arr2.reverse());
console.log(arr2);

//Concat method
const allLeters = arr.concat(arr2);
console.log(allLeters);

//Join method
console.log(allLeters.join(", "));
*/

//================
//Arrays: forEach:
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(function (movement, i) {
  let message = `Movement ${i + 1}: `;
  if (movement > 0) {
    message += `You deposited ${movement}$.`;
  } else {
    message += `You withdrew ${Math.abs(movement)}$.`;
  }

  console.log(message);
});
