// There is a queue for the self-checkout tills at the supermarket. Your task is
// write a function to calculate the total time required for all the customers to check out!

// input
// - customers: an array of positive integers representing the queue. Each integer
// represents a customer, and its value is the amount of time they require to check out.
// - n: a positive integer, the number of checkout tills.

// output
// The function should return an integer, the total time required.

/*
Finished in about 25 mins

rules
- each till must process sequentially
- each till processes at the same rate
- ignore data validation

data structure
- arrays : can use reduce
- tills as nested arrays [[ ], [ ], ... ]

approach
- create the appropriate number of tills
    - create an empty array
    - iterate through that array for the number of tills, and create a new nested empty array
- iterate through customers in (index) order
    - assign them to a till with the lowest sum
        - use reduce to determine current lowest total of all elements (total time)
        - find till with lowest total time
            - iterate through each till
            - keep track of index of till with the lowest total time
- check the max total time for each array and return that


notes
- can use reduce to calculate sum
- till is an array
[5, 3, 4], 2
1:  [5] > 5
2:  [3, 4] > 7 **

[10, 2, 3, 3], 2
1: [10] > 10 **
2: [2, 3, 3] > 8

[5, 3, 4, 7, 2, 3], 2
1: [5, 7 ] > 12
2: [3, 4, 2, 3] > 12 ***
*/

console.log(queueTime([5,3,4], 1) === 12);
// should return 12
// because when there is 1 till, the total time is just the sum of the times

console.log(queueTime([10,2,3,3], 2) === 10);
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

console.log(queueTime([2,3,10], 2) === 12);
// should return 12

console.log(queueTime([5, 3, 4, 7, 2, 3], 2) === 12);

//Array(length).fill([]);

function queueTime(customers, numTills) {
  let initializeTills = numTills => {
    let tills = [];
    for (let i = 0; i < numTills; i += 1) {
      tills.push([0]);
    }
    return tills;
  };

  let totalTime = till => till.reduce((sum, time) => sum + time);

  let findTillIndex = tills => {
    let index = 0;
    let minTime = Infinity;
    tills.forEach((tillArray, tillIndex) => {
      if (totalTime(tillArray) < minTime) {
        index = tillIndex;
        minTime = totalTime(tillArray);
      }
    });
    return index;
  };

  let getMaxTime = tills => {
    let maxTime = 0;
    tills.forEach(tillArray => {
      if (totalTime(tillArray) > maxTime) {
        maxTime = totalTime(tillArray);
      }
    });
    return maxTime;
  };

  let tills = initializeTills(numTills);

  customers.forEach(time => {
    let tillIndex = findTillIndex(tills);
    tills[tillIndex].push(time);
  });
  
  console.log(tills);
  console.log(getMaxTime(tills));
  return getMaxTime(tills);
}