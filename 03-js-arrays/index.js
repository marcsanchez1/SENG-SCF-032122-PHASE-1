
// const list = [1,3,5,1,15]
// list[2]


// const pokemon = ['pikachu', 'bulbasaur', 'ivysaur']
// const anotherPokemon = ['Venusaur', 'Charmander']

// === experimenting with push and unshift (destructive) ===
 
// pokemon.push("gloom")
// pokemon.unshift('pikachu')
// console.log(pokemon.length)

// === experimenting with push and pop (destructive) ===

// const lastPoke = pokemon.pop()
// console.log(lastPoke)
// anotherPokemon.push(lastPoke)
// console.log(anotherPokemon)

// === experimenting with shift and push (destructive) ===

// const firstPoke = pokemon.shift()
// console.log(firstPoke)
// anotherPokemon.push(firstPoke)
// console.log(anotherPokemon)

// === avoiding nested arrays using array method ===

// anotherPokemon.push(pokemon) // this returns us nested arrays
// console.log(anotherPokemon)

// const anotherArray = [ 'Charmeleon', ...pokemon ] // we 'spread' the other array => no nested arrays!
// console.log(anotherArray)


// pokemon.push(...anotherPokemon, 'Charmeleon') // we can 'spread' the array at the front or the back
// console.log(pokemon)

// console.log(anotherArray)

// const loudPoppedPoke = pokemon.pop().toUpperCase() // we can chain methods
// console.log(loudPoppedPoke)


// const pokemon = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine"]

// === Assignment: Create a new array, 'favorites', that includes the first 2 elements from pokemon only and the following 2 new elements: 'Tquirtle', 'Turtwig' ===

// const favorites = [pokemon[0], pokemon[1], 'Squirtle' , 'Turtwig']

// const favorites = [...pokemon.slice(0,2), 'Squirtle' , 'Turtwig'] // with slice and spread

// in 2 steps
// const favorites = pokemon.slice(0, 2)
// favorites.push('squirtle', 'turtwig')

// if we do not use the ... spread operator then the first slice is nested as the first element in the array
// const favorites = [pokemon.slice(0, 2), 'Squirtle', 'Turtwig']
// console.log(favorites)

// === LOOPS (two ways) ===

// for(let i = 0; i < pokemon.length; i++ ) { 
//     pokemon[i] = pokemon[i].toLowerCase()
//     console.log(pokemon[i])
// }

// for(const poke of pokemon){
//     console.log(poke)
// }

// console.log(pokemon)

// === ITERATOR METHODS ===

// let dogs = ["timmy", "zoie", "king", "king", "king"]

// dogs.forEach((dog) => console.log(dog.toUpperCase())) // no return value on forEach

// let foundDog = dogs.find((dog) => dog === "king") // returns a new ELEMENT, the first match (nondestructive)
// let foundDogArr = dogs.filter((dog) => dog === "king") // returns a new array (nondestructive)
// let otherFoundDogArr = dogs.filter((dog) => dog === "king")

// console.log(foundDogArr == otherFoundDogArr) // arrays are pass by reference, not pass by value. So these arrays that seem the same are not. They each take up a different place in memory.


// const nums = [1,2,3]
// const numsDoubled = nums.map(number => number + number)  // returns a new array (nondestructive)
// console.log(numsDoubled)

// const experiment = nums.map(el => el += "!")
// console.log(experiment) // example of type coersion!







