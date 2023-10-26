// Problem 1
// A constructor function is typically named starting with a Capital letter - indicates that `new` operator should be used when invoking this function




// Problem 2
function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = Lizard();
lizzy.scamper(); // ? I'm scampering ** WRONG **
// This code returns an error since there is no method `scamper` on `lizzy`
// `lizzy` is undefined since `Lizard` did NOT explicitly return anything when 
// invoked as a regular function

// However, the `scamper` function will be created on the global object
// i.e., `global.scamper()` will output "I'm scampering!" to the screen


// Problem 3
let lizzy2 = new Lizard();
lizzy2.scamper();