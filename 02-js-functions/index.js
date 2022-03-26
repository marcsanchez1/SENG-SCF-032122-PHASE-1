
function renderGreeting(name){
    const h3 = document.createElement("h3")
    console.log(h3)
    console.log("name is type: ", typeof name)
    if(typeof name === "string"){
      h3.innerText = "Hi there," + " " + name + "!!"
      const div = document.querySelector("div")
      div.className = "header"
      div.append(h3)
    } 
}
// let me = prompt("Hi there pls tell me your name")
// console.log(typeof me)
// renderGreeting(me)

// function sayHi() {
//   console.log('hi there how\'s it going?')
// }

function sayHi(name) {
    console.log('hi ' + name)
    return `Hi ${name} how are you doing today?`
}

// sayHi('Desh')

const bestFriendEver = "Desh"

// sayHi(bestFriendEver)

function faveThing(category, thing) {
  return "This is the best " + category + ": " + thing;
}

// function faveThing(category="animal", thing="dog") {
//   return "This is the best " + category + ": " + thing;
// }

// console.log(faveThing("brand", "apple"));

faveThing("brand", "apple");

const addNum = (num1, num2) => num1 + num2

addNum(1,5)

