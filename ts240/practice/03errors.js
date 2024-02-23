"use strict";
// playing with errors
{
    let arr = [1, 2, 3];
    // const num: number = arr[1];
    function alwaysError() {
        const promise = new Promise((_, rej) => {
            setTimeout(() => rej(new Error('something went wrong')), 1000);
        });
        return promise;
    }
    alwaysError()
        .then(() => console.log('then block'))
        .catch((e) => {
        if (e instanceof Error)
            console.log('error: ', e.message);
        else if (typeof e === 'string')
            console.log('string: ', e);
        else
            throw e;
    });
}
