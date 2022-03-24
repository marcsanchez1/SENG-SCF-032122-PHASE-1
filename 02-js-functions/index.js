
function renderGreeting(name){
    const h3 = document.createElement("h3")
    console.log(h3)
    console.log("name is type: ", typeof name)
    if(typeof name === "string"){
      h3.innerText = "Hi there," + " " + name + "!!"
      document.querySelector("div").append(h3)
    } 
}
// let me = prompt("Hi there pls tell me your name")
// console.log(typeof me)
// renderGreeting(me)

