"use strict";

/*
Coding Challenge #1
    In this challenge you will build a function 'whereAmI' which renders a country
only based on GPS coordinates. For that, you will use a second API to geocode
coordinates. So in this challenge, you’ll use an API on your own for the first time �

Your tasks:
PART 1:
    1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
and a longitude value ('lng') (these are GPS coordinates, examples are in test
data below).
    2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
to convert coordinates to a meaningful location, like a city and country name.
Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
will be done to a URL with this format:
https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
promises to get the data. Do not use the 'getJSON' function we created, that
is cheating �
    3. Once you have the data, take a look at it in the console to see all the attributes
that you received about the provided location. Then, using this data, log a
message like this to the console: “You are in Berlin, Germany”
    4. Chain a .catch method to the end of the promise chain and log errors to the
console

PART 2:
    5. Now it's time to use the received data to render a country. So take the relevant
attribute from the geocoding API result, and plug it into the countries API that
we have been using.
    6. Render the country and catch any errors, just like we have done in the last
lecture (you can even copy this code, no need to type the same code)
The Complete JavaScript Course 31

Test data:
    § Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
    § Coordinates 2: 19.037, 72.873
    § Coordinates 3: -33.933, 18.474
*/

const renderCounrty = function (countryName) {
  fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then((response) => response.json())
    .then((data) => {
      const country = data[0];

      const html = `
        <article class="country">
          <img class="country__img" src="${country.flag}" />
          <div class="country__data">
            <h3 class="country__name">${country.name}</h3>
            <h4 class="country__region">${country.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +country.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${
              country.languages[0].name
            }</p>
            <p class="country__row"><span>💰</span>${
              country.currencies[0].name
            }</p>
          </div>
        </article>
    `;

      document
        .querySelector(".container")
        .insertAdjacentHTML("beforeend", html);
    })
    .catch((err) => console.log(`Something went wrong! ${err.message}`));
};

const lat = 52.508;
const longt = 13.381;

fetch(`https://geocode.xyz/${lat},${longt}?geoit=json`)
  .then((response) => response.json())
  .then((data) => {
    const country = data.country;
    renderCounrty(country);
  })
  .catch((err) => console.error(`Something went wrong! ${err.message}`));
