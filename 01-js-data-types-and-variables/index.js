"use strict"; // keeps us from accidentally initializing a variable without let or const keywords, along with some other helpful restrictions

// ------------ console.log() ------------

// What is console.log() and why do we use it?
// a way to test your code in the console
// command to show a string or variable to the console
// runs code or prints out code (to the console)
// gives us a tight feedback loop to help avoid bugs
// NOTE: Debugger is another tool we use that will come up in a later lecture

// console.log(console) // console is an object, we can call the method .log() on it

// ------------ const, let, var: ------------

// What is a variable?
// variable is a container for data
// a character that doesn't have a fixed meaning (until we give it one)
// stores your data
// a place to store data types

// const => constant. we cannot reassign the value once it is set/initialized
const dog = "Tiger Rose";
dog = "another dog"; // this will cause an error in the console
// console.log(dog)

// let => does allow us to reassign values
let four = "four";
four = 4;

console.log(myHouse); // example of hoisting using the var keyword. this is bad practice, we do not want this. use let or const instead to avoid hoisting variables.
var myHouse = "apartment";
myHouse = "someplace else";

// ------------ 7 primitive data types in JS: ------------
// Number 0 5 100000 -3 4.6 are all Number types, including floats (with decimals)
// String "" '' are both valid strings  also: ``

// console.log(`my dog is ${dog}`) 
// we use backticks for string interpolation

// Undefined => value is not yet assigned
// Null => value is deliberately assigned to be "nothing", i.e., no value
// Boolean => truthy or falsey

// use !! double bang operator on any element to check it's Boolean value
// use ! single bang operator if we want to check the opposite of it's Boolean value

// new datatypes with ES6 (we won't be using these)
// BigInt => very big numbers, larger than Number.MAX_SAFE_INTEGER
// Symbol => guaranteed to be unique

// use typeof keyword to check datatypes in the console

/* all falsey values:
0
null
undefined
""
false
NaN
*/

// everything else is truthy, even " " i.e., a string with one space in it.

// ------------ Scope: ------------

let myLunch = "ice cream"; // global scope
console.log(myLunch);

let counter = 100; // global scope

if (counter === 100) {
  counter = 0;
  let qualityNum = "teeny"; // block scope, inside of a code block i.e., {}
  let otherVariable = "this is another block scope variable"
  console.log(counter);
} else {
  counter = counter + 1;
  let qualityNum = "incrementing"; // block scope
  console.log(otherVariable) // this will error out as well. block scopes are scoped to their own location. one block cannot access inside another block.
}

// console.log(counter, qualityNum); // we can console.log multiple elements, separated by commas
// qualityNum will not be accessible from the global scope because it is hidden inside of block scope
// block scope can access variables outside it, all the way to the global scope. 
// but global scope cannot reach into block scope

// another reason to NOT use var. We lose block scope functionality when using this keyword.
// if(5 < 10) {
//     var secret = 'super top secret password'
//     }
 
// ------------ ternary operator: ------------
// 3 parts:

// condition ?
// if truthy do this :
// if falsey do this

// declaring two separate variables using the let keyword
let dragon = "🐲", creature;

creature = (dragon ? dragon : "❓");

// strict equality operator vs assignment operator
// creature === dragon; // creature = dragon

console.log(creature);
//we have assigned the value of creature to dragon because "🐲" is truthy

// https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md
