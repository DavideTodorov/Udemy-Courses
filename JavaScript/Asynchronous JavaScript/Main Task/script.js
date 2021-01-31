"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, type = "") {
  const html = `
        <article class="country ${type}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
  `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

//==========================================================
//AJAX XMLHttpRequest
const getCountryData = function (country) {
  const request = new XMLHttpRequest();

  request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    renderCountry(data);
  });
};

// getCountryData("bulgaria");
// getCountryData("italy");
// getCountryData("usa");

const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();

  request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //Render country
    renderCountry(data);

    //Render neighbour
    const [neighbour] = data.borders;

    if (!neighbour) return;

    const neighbourRequest = new XMLHttpRequest();
    neighbourRequest.open(
      "GET",
      `https://restcountries.eu/rest/v2/alpha/${neighbour}`
    );
    neighbourRequest.send();

    neighbourRequest.addEventListener("load", function () {
      const data2 = JSON.parse(this.responseText);

      renderCountry(data2, "neighbour");
    });
  });
};

// getCountryAndNeighbour("bulgaria");

//Fetch API
// fetch(`https://restcountries.eu/rest/v2/name/bulgaria`)
//   .then((response) => response.json())
//   .then((data) => {
//     const country = data[0];
//     renderCountry(country);

//     const neighbour = country.borders[0];

//     return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//   })
//   .then((response) => response.json())
//   .then((data) => renderCountry(data, "neighbour"));

//Handling rejected promises
const getCountryDataFetch = function () {
  fetch(`https://restcountries.eu/rest/v2/name/bulgaria`)
    .then((response) => response.json())
    .then((data) => {
      const country = data[0];
      renderCountry(country);

      const neighbour = country.borders[0];

      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.error(err);
      countriesContainer.insertAdjacentText(
        "beforeend",
        "Something went wrong!"
      );
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountryDataFetch("bulgaria");
});

//Async - await
const whereAmI = async function (country) {
  try {
    const countryResponse = await fetch(
      `https://restcountries.eu/rest/v2/name/${country}`
    );

    if (!countryResponse.ok) throw new Error(`Country "${country}" not found`);

    const [countryData] = await countryResponse.json();
    renderCountry(countryData);
    return `${countryData.capital}`;
  } catch (err) {
    alert(err.message);
    throw err;
  }
};

// whereAmI(prompt("Enter country: "));

// (async function () {
//   try {
//     const capital = await whereAmI(prompt("Enter country: "));
//     console.log(capital);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     console.log("Finished");
//   }
// })();

const getJSON = async function (url, errorMsg = "Something went wrong") {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
  return await response.json();
};

const getCountriesCapitals = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c1}`
    // );
    // const [data2] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c2}`
    // );
    // const [data3] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c3}`
    // );
    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);

    console.log(data.map((c) => c[0].capital));
  } catch (err) {
    console.error(err);
  }
};

getCountriesCapitals("bulgaria", "greece", "turkey");
