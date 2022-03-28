# JavaScript Arrays
- arrays are collections of data stored in an ordered list
- can reference different items by their index (we call these items elements)
- arrays are zero indexed: means that first index starts with 0
- an array can contain different data types
```const list = [1, 2, 3,'four','five', 'imma string', true]```
- arrays come with [built in methods and properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

## Modifying Elements:
add elements => both of the following are destructive
- .push("element") => adds to end of array
- .unshift("element") => adds to front of array

remove elements  => both of the following are destructive
- .pop() => takes no argument. removes back element of array
- .shift() => takes no argument. removes front element of array

nondestructive methods
- ```...``` spread operator allows us to copy from an array
- slice => also allows us to copy from an array. We can ```slice``` all or a portion of an array

destructive method
- splice => used to delete, replace or insert a new element

---

Loops: cycling through each element in the array to perform a task on each individual element 

for loop ```for(let i = 0; i < 10; i++){ console.log(i) }```

ES6 syntax: for of loop ```for(const variable of array){ console.log(i) }```

---

## A few array iterator methods - each takes a callback function

array.forEach(element => console.log(element)) => performs some action. *No return value for forEach*

array.find(element => element === someOtherElement) => finds first match and returns that element

array.filter(element => element === someOtherElement) => finds all matches and returns then in a new array

array.map(element => element += "!") performs some action and returns the updated elements in a new array

