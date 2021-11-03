const randomNumber = () => Math.floor(Math.random() * 101);

const upperCase = (string) => string.toUpperCase();

const firstLetter = (string) => string[0];

const agroupString = (str1, str2) => `${str1} ${str2}`;

const fetchDog = () => fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response
        .json()
        .then(json =>
          response.ok ? Promise.resolve(json) : Promise.reject(json)
        )
);

module.exports = { randomNumber, upperCase, firstLetter, agroupString, fetchDog };