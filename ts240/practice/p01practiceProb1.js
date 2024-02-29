"use strict";
// Practice problem 1
function getFakeApiData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (Math.random() < 0.5)
                res({ name: 'bob', age: 43 });
            else
                rej(new Error('network error'));
        }, 1000);
    });
}
function logData() {
    getFakeApiData()
        .then((data) => console.log(data))
        .catch((err) => console.log(err.message));
}
logData();
