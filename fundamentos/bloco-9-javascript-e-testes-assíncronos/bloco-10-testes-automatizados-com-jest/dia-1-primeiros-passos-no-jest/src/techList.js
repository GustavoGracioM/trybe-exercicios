function techList(array, name) {
  if (array.length < 1) return 'Vazio!';
  const arraySort = array.sort();
  return arraySort.map((arr) => ({ tech: arr, name, }));
}

module.exports = techList;