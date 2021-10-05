const randomNumber = () => Math.floor(Math.random() * (100 - 1 + 1) + 1);
const upperCase = (str) => str.toUpperCase();
const firstLetter = (str) =>  str.charAt(0);
const concatenation = (str1, str2) => str1.concat(str2);

const dogPictures = async () => {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    return await response.json();
  } catch(error) {
    return new Error(error);
  }
};

module.exports = { randomNumber, upperCase, firstLetter, concatenation, dogPictures };