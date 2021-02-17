'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const spinner = document.querySelector('.temp');
const imgs = document.querySelector('.images');
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
  countriesContainer.style.opacity = 1;
  console.dir(data.borders[0]);
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
// const getJSON = function (url, errorMsg = 'something went wrong') {
//   return fetch(url).then(res => {
//     if (!res.ok) {
//       throw new Error(`${errorMsg} ${res.status}`);
//     }

//     return res.json();
//   });
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', `o noh ${msg.message}`);
// };

// const getCountryData = function (country) {
//   getJSON(
//     `https://restcountries.eu/rest/v2/name/${country}`,
//     `country not found`
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const [neighbor] = data[0].borders;
//       //   console.log(neighbor);
//       if (!neighbor) throw new Error('no neighbor found');
//       return getJSON(
//         `https://restcountries.eu/rest/v2/alpha/${neighbor}`,
//         'country not found'
//       );
//     })

//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.dir(err);
//       console.error(`${err.message} o no `);
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
// console.log('start');
// const lotteryPromise = new Promise(function (res, rej) {
//   console.log('lottery draw is happening');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       res('you won');
//     } else {
//       rej(new Error('lost your money'));
//     }
//   }, 2000);
// });

// console.log('end');
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

// promisify
// console.log('start');
// const lotteryPromise = new Promise(function (res, rej) {
//   console.log('lottery draw is happening');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       res('you won');
//     } else {
//       rej(new Error('lost your money'));
//     }
//   }, 3000);
// });

// console.log('end');
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('i waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('i waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('i waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('i waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('lsst'));

//static promise

// Promise.resolve('abc').then(x => console.log(x));

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

// promisifying geolocation

// const getPosition = function () {
//   return new Promise(function (res, rej) {
//     navigator.geolocation.getCurrentPosition(res, rej);
//   });
// };

// getPosition()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

// challenge two
// const createImage = function (path) {
//   const img = document.createElement('img');
//   img.src = path;
//   countriesContainer.append(img);
// };

// createImage('img/img-1.jpg',crtImg);
// const waitImg = function(seconds){
//   setTimeout(() => {
//     return new Promise(function(res,rej){
//       const img = document.createElement('img');
//       img.src = path;
//       countriesContainer.append(img);
//     })
//   }, seconds * 1000);
// }

// const createImage = function (path) {
//   return new Promise(function (res, rej) {
//     setTimeout(res => {
//       const img = document.createElement('img');
//       img.src = path;
//       img.addEventListener('load', function () {
//         imgs.append(img);
//         console.log('2s');
//       });
//     }, 2000);
//   });
// };
// // const a = createImage().then(res => console.log(res));
// createImage('img/img-1.jpg');

// const img = document.createElement('img');
//   img.src = path;
//   img.addEventListener('load', function () {
//     imgs.append(img);
//   });

//used callback hell
// const wait = function (seconds) {
//   return new Promise(function (res) {
//     setTimeout(res, seconds * 1000);
//   });
// };
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       imgs.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('img not found'));
//     });
//   });
// };
// createImage('img/img-1.jpg')
//   .then(res => {
//     setTimeout(() => {
//       console.log(res);
//       res.classList.add('none');
//       createImage('img/img-2.jpg').then(res => {
//         setTimeout(() => {
//           console.log(res);
//           res.classList.add('none');
//           createImage('img/img-3.jpg').then(res => {
//             setTimeout(() => {
//               console.log(res);
//               res.classList.add('none');
//             }, 2000);
//             console.log(res);
//             return res;
//           });
//         }, 2000);
//         console.log(res);
//         return res;
//       });
//     }, 2000);
//     console.log(res);
//     return res;
//   })
//   .catch(err => console.error(err));

//using promisifying
// const wait = function (seconds) {
//   return new Promise(function (res) {
//     // console.dir(res);
//     setTimeout(res, seconds * 1000);
//   });
// };
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       imgs.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('img not found'));
//     });
//   });
// };
// let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log(img);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

// async await

// //geo location
// const getPosition = function () {
//   return new Promise(function (res, rej) {
//     navigator.geolocation.getCurrentPosition(res, rej);
//   });
// };

// // async await

// const whereAmI = async function () {
//   //geo location
//   const pos = await getPosition();
//   const { latitude: lat, longitude: lng } = pos.coords;

//   //reverse geo coding
//   const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//   const dataGeo = await resGeo.json();
//   console.log(dataGeo);

//   //country data
//   const cn = await fetch(
//     `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//   );
//   console.log('before fetch');
//   const data = await cn.json();
//   console.log(data);
//   console.log('after fetch');
//   renderCountry(data[0]);
// };
// // whereAmI('bangladesh');
// console.log('one');

// const whereAmI2 = async function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(res => res.json())
//     .then(data => console.log(data));

//   console.log('after fetch');
// };
// console.log('one');
// whereAmI2('bangladesh');

///////////////////////////////
///////////////////////////////
///////////////////////////////

//catch

//geo location
// const getPosition = function () {
//   return new Promise(function (res, rej) {
//     navigator.geolocation.getCurrentPosition(res, rej);
//   });
// };

// // async await

// const whereAmI = async function () {
//   //geo location
//   try {
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     //reverse geo coding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('problem is in location 💥1');
//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);

//     //country data
//     const cn = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//     );
//     if (!cn.ok) throw new Error('problem is in country 💥2');
//     console.log('before fetch');
//     const data = await cn.json();
//     console.log(data);
//     console.log('after fetch');
//     renderCountry(data[0]);
//     return data[0];
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// };

// whereAmI()
//   .then(d => console.log(d))
//   .catch(err => console.error(err, '💥'));
// // console.log(city);
// console.log('one');

// const getJSON = function (url, errorMsg = 'something went wrong') {
//   return fetch(url).then(res => {
//     if (!res.ok) {
//       throw new Error(`${errorMsg} ${res.status}`);
//     }

//     return res.json();
//   });
// };

// const get3country = async function (c1, c2, c3) {
//   try {
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

//     const data = await Promise.all([
//       getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
//     ]);
//     console.log(data.map(con => con[0].capital));
//   } catch (err) {
//     console.log('o no err err', err);
//   }
// };
// get3country('bangladesh', 'pakistan', 'nepal');

// (async function () {
//   const data = await Promise.race([
//     getJSON(`https://restcountries.eu/rest/v2/name/bangladesh`),
//     getJSON(`https://restcountries.eu/rest/v2/name/italy`),
//     getJSON(`https://restcountries.eu/rest/v2/name/nepal`),
//   ]);
//   console.log(
//     '000000000000000000000000000000000000000000000000000000000000000000000000'
//   );
//   console.log(data[0].name);
// })();
// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(() => {
//       reject(new Error('o no reject timeout'));
//     }, s);
//   });
// };

// //promise race
// Promise.race([
//   getJSON(`https://restcountries.eu/rest/v2/name/usa`),
//   timeout(1000),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.log(err));

// //promise allSettled
// Promise.allSettled([
//   getJSON(`https://restcountries.eu/rest/v2/name/usa`),
//   timeout(1000),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// //promise any
// Promise.any([getJSON(`https://restcountries.eu/rest/v2/name/usa`), timeout(1)])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// const wait = function (sec) {
//   return new Promise(function (res, _) {
//     setTimeout(res, sec * 1000);
//   });
// };

// const createImage = function (url) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = url;
//     img.addEventListener('load', function () {
//       imgs.appendChild(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('img not found 💥💥💥'));
//     });
//   });
// };
// let currentImg;
// createImage('img/img-1.jpg')
//   .then(res => {
//     currentImg = res;
//     console.log(res.src);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(res => {
//     currentImg = res;
//     console.log(res.src);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .then(() => {})
//   .catch(err => console.error('img not '));

const wait = function (sec) {
  return new Promise(function (res, _) {
    setTimeout(res, sec * 1000);
  });
};

const createImage = function (url) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = url;
    img.addEventListener('load', function () {
      imgs.appendChild(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('img not found 💥💥💥'));
    });
  });
};
let currentImg;

const loadAll = async function (arr) {
  try {
    const imgBoss = arr.map(async img => await createImage(img));
    console.log(imgBoss);
    const imgEl = await Promise.all(imgBoss);
    console.log(imgEl);
    imgEl.forEach(e => e.classList.add('parallel'));
  } catch (err) {
    console.log(err);
  }
};

// const loadAll = async function (arr) {
//   try {
//     let luladata = [];
//     const imgBoss = arr.map(async function (data) {
//       try {
//         const dat = await createImage(data);
//         console.log(dat);
//         luladata.push(dat);
//         return data;
//       } catch (err) {
//         console.error('o god, ' + err.message);
//       }
//     });
//     console.log(imgBoss);
//     const mp = Promise.allSettled(imgBoss);
//     console.log(mp);
//     const m = await mp;
//     console.log(luladata);
//     m.forEach(o => {
//       console.log(o.value);
//       console.log(o.value.src);
//     });
//     luladata.forEach(el => el.classList.add('parallel'));
//     console.log(m);
//     // mp.forEach(i => console.log(i));
//     imgBoss.forEach(el => {
//       el.then(e => console.dir(e));
//     });
//   } catch (err) {
//     console.log(err + ' oh no error has come');
//   }
// };
const ok = loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
(async function () {
  let img = await createImage('img/img-1.jpg');
  await wait(2);
  img.style.display = 'none';
  img = await createImage('img/img-2.jpg');
  await wait(2);
  img.style.display = 'none';
  img = await createImage('img/img-3.jpg');
  await wait(2);
  img.style.display = 'none';
});
// const temp = createImage('img/img-1.jpg')
//   .then(res => {
//     console.log(res);
//     imgs.appendChild(res);
//   })
//   .catch(err => console.log('getting problem while calling createImage'));
// console.log(temp);

// const test = function (a) {
//   return new Promise(function (res, rej) {
//     if (a === 'shuvo') {
//       res();
//     } else {
//       rej(new Error('on no TEMP error error'));
//     }
//   });
// };

// const su = test('shuvo')
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
// console.log(su)
