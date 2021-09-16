async function fetchPromise() {
  const promise = new Promise((resolve, reject) => {
    const array = Array.from({ length: 10 }, () =>  Math.floor(Math.random() * 50) + 1);
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    (sum < 8000) ? resolve(sum) : reject();
  });
  const div = [2, 3, 4, 5];
  promise
    .then((sum) => div.map((number) => sum / number))
    .then((allSum) => allSum.reduce((acc, curr) => acc + curr, 0 ))
    .catch(() => console.log('É mais de oito mil!'));
};

fetchPromise();