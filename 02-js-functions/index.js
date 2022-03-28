function renderGreeting(name) {
  const h3 = document.createElement("h3");
  console.log(h3);
  console.log("name is type: ", typeof name);
  if (typeof name === "string") {
    h3.innerText = "Hi there," + " " + name + "!!";
    const div = document.querySelector("div");
    div.className = "header";
    div.append(h3);
  }
}
// let me = prompt("Hi there pls tell me your name")
// console.log(typeof me)
// renderGreeting(me)

// ===== function delared without a parameter ====

// function sayHi() {
//   console.log('hi there how\'s it going?')
// }

// ===== function delared WITH a parameter ====

// sayHi('Desh') //hoisted using function keyword

// function sayHi(name) {
//   console.log('hi ' + name)
//   return `Hi ${name} how are you doing today?`
// }

// const bestFriendEver = "Desh";

// sayHi(bestFriendEver) // argument as variable

// ===== function can take multiple parameters (or no parameter) ====

// function faveThing(category, thing) {
//   return "This is the best " + category + ": " + thing;
// }

// ===== function parameter can be set to a default value ====

// function faveThing(category="animal", thing="dog") {
//   return "This is the best " + category + ": " + thing;
// }


// faveThing("brand", "apple");
// faveThing();


// function addNum(num1,num2) {
//   return num1 + num2
// }

// ===== function expression, set to a variable (this will not hoist because of const variable rule) ====

// const addNum = function(num1, num2){
//   return num1 + num2
// }

// ===== arrow function! ====

// const addNum = (num1, num2) => num1 + num2

// const sqNum = num1 => num1 ** 2 // a single parameter can be written with or without parenthesis

// multiple parameters (or no parameter) => we must include the parenthesis

// const addNum = (num1, num2) => {
//   console.log(num1 + num2); // arrow functions require {} and the return keyword if we include multiple commands
//   return num1 + num2;
//   console.log("this is my num1: ", num1); // this line of code will not run because of return on line above
// };

// console.log(addNum(1,5))

// ===== callback functions ====
// function genericFunc(callback) {
//   return callback();
// }

// we don't ordinarily use the let keyword when declaring a function... but we can!
// let message = () => console.log("when i use this function as argument, it is a callback function")

// genericFunc(message)

// function sayHi() {
//   console.log("hi there how's it going?");
// }

// genericFunc(sayHi)

// reassigning message for setTimeout function
// message = () => console.log("...i'm waiting....")

// setTimeout(message, 5000)

// see what happens if we INVOKE the callback function instead of passing the reference to the callback function!
// setTimeout(message(), 5000)

// ===== scope continued =====

// let counter = 1000; // global scope

// counter--;
// // console.log(counter);

// function incrementCounter() {
//   let counter = 1; // function scope, different universe than global. so these two counters are different counters. if incrementCounter finds this variable inside itself it will not look to global scope for the value of counter.
//   console.log("im in this function", counter);

//   if (counter === 1000) {
//     let myName = "teacher"; // block scope
//     console.log("block scope, i have access to function scope", counter);
//   } else if (counter === "hi") {
//     console.log("this code is inside of hi");
//     // console.log(myName) // block scopes do not have access to other block scopes
//   } else {
//     console.log("the previous conditions were not true so we've landed here");
//   }
  // console.log(myName) // we are in function scope, no access to block scope
// }

// console.log(incrementCounter());