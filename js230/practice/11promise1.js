
function count(num) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.random() > 0.5) rej(new Error('random error'));

      console.log(num);
      res(num + 1);
    }, 1000);
  });
}

count(1)
  .then(res => count(res))
  .then(res => count(res))
  .then(res => count(res))
  .then(res => count(res))
  .catch(err => console.log(err.message))
  .finally(()=> console.log('count complete'));