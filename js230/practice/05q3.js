// https://launchschool.com/lessons/519eda67/assignments/5e87f026
// (lesson 2, assignment 21)
// Problem 3


function retryOperation(operationFunc) {

  let tryFunc = function(attempt) {
    if (attempt === 4) {
      console.log('Operation failed');
      return;
    }
    operationFunc().then(res => console.log(res))
                   .catch(() => {
                      console.log('Attempt ', attempt, ' failed');
                      attempt += 1;
                      tryFunc(attempt);
                   });
  };
  tryFunc(1);
}



// Provided Example usage:
retryOperation(
  () =>
    new Promise((resolve, reject) =>
      Math.random() > 0.33
        ? resolve("Success!")
        : reject(new Error("Fail!"))
    )
);