// Practice problem 1

// define the shape of ApiData
// add type annotations to the following code

// function getFakeApiData() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (Math.random() < 0.5) res({ name: 'bob', age: 43 });
//       else rej(new Error('network error'));
//     }, 1000);
//   })
// }

// function logData() {
//   getFakeApiData()
//   .then(data => console.log(data))
//   .catch(err => console.log(err.message));
// }

// logData();

// ways to extend:
// - how might we manage additional properties that might get returned by the Api?
// - 


// my answer

interface ApiData {
  name: string,
  age: number,
}

function getFakeApiData(): Promise<ApiData> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.random() < 0.5) res({ name: 'bob', age: 43 });
      else rej(new Error('network error'));
    }, 1000);
  })
}

function logData(): void {
  getFakeApiData()
  .then((data: ApiData) => console.log(data))
  .catch((err: Error) => console.log(err.message));
}

logData();