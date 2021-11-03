const randomNumber = () => Math.floor(Math.random() * 101);

const upperCase = (string) => string.toUpperCase();

const firstLetter = (string) => string[0];

const agroupString = (str1, str2) => `${str1} ${str2}`;

module.exports = { randomNumber, upperCase, firstLetter, agroupString };