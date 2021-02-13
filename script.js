'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const spinner = document.querySelector('.temp');
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

//old way of calling ajax or  getting data from api

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();
//   request.addEventListener('load', function (e) {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = ` <article class="country">
//                     <img class="country__img" src="${data.flag}" />
//                     <div class="country__data">
//                         <h3 class="country__name">${data.name}</h3>
//                         <h4 class="country__region">${data.region}</h4>
//                         <p class="country__row"><span>👫</span>${+(
//                           data.population / 1000000
//                         ).toFixed(1)}M people</p>
//                         <p class="country__row"><span>🗣️</span>${
//                           data.languages[0].name
//                         }</p>
//                         <p class="country__row"><span>💰</span>${
//                           data.currencies[0].code
//                         }</p>
//                     </div>
//                 </article>`;
//     console.log(html);
//     countriesContainer.insertAdjacentHTML('afterbegin', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// getCountryData('usa');
// getCountryData('bangladesh');

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// callback hell

const renderCountry = function (data, neighbor = '') {
  const html = ` <article class="country ${neighbor}">
                      <img class="country__img" src="${data.flag}" />
                      <div class="country__data">
                          <h3 class="country__name">${data.name}</h3>
                          <h4 class="country__region">${data.region}</h4>
                          <p class="country__row"><span>👫</span>${+(
                            data.population / 1000000
                          ).toFixed(1)}M people</p>
                          <p class="country__row"><span>🗣️</span>${
                            data.languages[0].name
                          }</p>
                          <p class="country__row"><span>💰</span>${
                            data.currencies[0].code
                          }</p>
                      </div>
                  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  //   countriesContainer.style.opacity = 1;
  //   console.dir(data.borders[0]);
};

//ajax call country 1
// const getCountryDataAndNeighbor = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();
//   request.addEventListener('load', function (e) {
//     const [data] = JSON.parse(this.responseText);
//     // console.log(data);
//     //render country 1
//     renderCountry(data);

//     //get neighbor country 2
//     const [neighbor] = data.borders;
//     if (!neighbor) return;

//     //ajax call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       //   console.log(JSON.parse(this.responseText));
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');

//       //ajax call country 2
//       const request3 = new XMLHttpRequest();
//       request3.open(
//         'GET',
//         `https://restcountries.eu/rest/v2/alpha/${neighbor}`
//       );
//       request3.send();
//       request3.addEventListener('load', function () {
//         // console.log(JSON.parse(this.responseText));
//         const data3 = JSON.parse(this.responseText);
//         renderCountry(data3, 'neighbour');
//       });
//     });
//   });
// };
// getCountryDataAndNeighbor('usa');

//hell
// setTimeout(() => {
//   console.log('1s passed');
//   setTimeout(() => {
//     console.log('2s passed');
//     setTimeout(() => {
//       console.log('3s passed');
//       setTimeout(() => {
//         console.log('4s passed');
//         setTimeout(() => {
//           console.log('5s passed');
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

//promises and fetch api

// const getCountryData = function (country = 'bangladesh') {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (res) {
//       console.log(res);
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// const getCountryData = function (country = 'bangladesh') {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(res => res.json())
//     .then(data => {
//       renderCountry(data[0]);
//     });
// };
// getCountryData();

// const getCountryData = function (country = 'bangladesh') {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(res => res.json())
//     .then(data => {
//       renderCountry(data[0]);
//       const [neighbor] = data[0].borders;
//       console.log(neighbor);
//       if (!neighbor) return;
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//     })
//     .then(res => res.json())
//     .then(data => renderCountry(data, 'neighbour'));
// };
// getCountryData();

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// error handling

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', `o noh ${msg.message}`);
// };

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(res => res.json())
//     .then(data => {
//       spinner.style.display = 'none';
//       renderCountry(data[0]);
//       const [neighbor] = data[0].borders;
//       //   console.log(neighbor);
//       if (!neighbor) return;
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//     })
//     .then(res => res.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err.message} o no`);
//       renderError(err);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function (e) {
//   getCountryData('bd');
// });
//   getCountryData();

//////////////////////////////////
//////////////////////////////////
//////////////////////////////////

// manually handling error

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', `o noh ${msg.message}`);
// };

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(res => {
//       console.log(res);
//       //throwing error manually
//       if (!res.ok) {
//         throw new Error(`country not found ${res.status}`);
//       }
//       //   console.log('ok2');
//       return res.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const [neighbor] = data[0].borders;
//       //   console.log(neighbor);
//       if (!neighbor) return;
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//     })
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(`neighbor not found ${res.status}`);
//       }
//       return res.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.dir(err);
//       console.error(`${err.message} o no`);
//       renderError(err);
//     })
//     .finally(() => {
//       spinner.style.display = 'none';
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function (e) {
//   getCountryData('bd');
// });
//   getCountryData();

//////////////////////////////////
//////////////////////////////////
//////////////////////////////////

// handling error using HELPER FUNCTION

//helper function
const getJSON = function (url, errorMsg = 'something went wrong') {
  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(`${errorMsg} ${res.status}`);
    }

    return res.json();
  });
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', `o noh ${msg.message}`);
};

const getCountryData = function (country) {
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    `country not found`
  )
    .then(data => {
      renderCountry(data[0]);
      const [neighbor] = data[0].borders;
      //   console.log(neighbor);
      if (!neighbor) throw new Error('no neighbor found');
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbor}`,
        'country not found'
      );
    })

    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.dir(err);
      console.error(`${err.message} o no `);
      renderError(err);
    })
    .finally(() => {
      spinner.style.display = 'none';
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener('click', function (e) {
  getCountryData('bd');
});
//   getCountryData();

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

//challenge 1

// const whereAmI = function (lat = 0, lng = 0) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       console.log(res);
//       if (!res.ok)
//         throw new Error(`supply proper value ${res.statusText} ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       // if (!data.ok) return new Error(`supply proper value `);
//       console.log(data);

//       const { city, country } = data;
//       console.log(`You are in ${city}, ${country}`);
//       fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//         .then(res => {
//           if (!res.ok) throw new Error('na na na');
//           return res.json();
//         })
//         .then(data => {
//           console.log(data[0].name);
//           getCountryData(data[0].name);
//         })
//         .catch(err => console.log(err.message));
//     })
//     .catch(err => {
//       console.log(`something went wrong: ${err.message}`);
//     });
// };

// whereAmI(19.037, 72.873);
// whereAmI(52.508, 13.381);
// whereAmI(8767, 987897);

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

//the event loop

// console.log('test data');

// setTimeout(() => {
//   console.log(`o's`);
// }, 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });
// console.log('test data end');

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

//creating own promises
console.log('start');
const lotteryPromise = new Promise(function (res, rej) {
  console.log('lottery draw is happening');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      res('you won');
    } else {
      rej(new Error('lost your money'));
    }
  }, 2000);
});

console.log('end');
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
