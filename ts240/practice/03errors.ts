// playing with errors
{
  let arr: number[] = [1, 2, 3];
  // const num: number = arr[1];

  function alwaysError(): Promise<string> {
    const promise: Promise<string> =  new Promise((_, rej) => {
      setTimeout(() => rej(new Error('something went wrong')), 1000);
    });
    return promise;
  }

  alwaysError()
  .then(() => console.log('then block'))
  .catch((e: unknown) => {
    if (e instanceof Error) console.log('error: ', e.message);
    else if (typeof e === 'string') console.log('string: ', e);
    else throw e;
  });

}