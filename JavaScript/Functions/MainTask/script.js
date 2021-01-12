"use strict";

const greet = greeting => name => console.log(`${greeting} ${name}`);

const greetingHey = greet("Hey");
greetingHey("David");

greet("Hello")("John");
