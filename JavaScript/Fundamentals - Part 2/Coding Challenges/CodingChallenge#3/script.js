'use strict';

/*
Coding Challenge #3

    Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)

Your tasks:
    1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
    2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
    3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: 
Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
*/

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    BMI: 0,

    calcBMI: function () {
        if (this.BMI === 0) {
            this.BMI = this.mass / this.height ** 2;
        }
        return this.BMI
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    BMI: 0,

    calcBMI: function () {
        if (this.BMI === 0) {
            this.BMI = this.mass / this.height ** 2;
        }
        return this.BMI
    }
};

let message;
if (john.calcBMI() > mark.calcBMI()) {
    message = `John's BMI (${john.BMI.toFixed(2)}) is higher than Mark's BMI (${mark.BMI.toFixed(2)}).`;
} else if (mark.calcBMI() > john.calcBMI()) {
    message = `Mark's BMI (${mark.BMI.toFixed(2)}) is higher than John's BMI (${john.BMI.toFixed(2)}).`;
} else {
    message = `John and Mark's BMI are equal (${john.BMI.toFixed(2)})`;
}

console.log(message);