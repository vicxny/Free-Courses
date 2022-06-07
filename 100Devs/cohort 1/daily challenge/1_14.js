// Please create a function that takes in the name of a person. 
// This function should add this person to a names list and let them know their position on the list. 
// The names list should be created outside of the function. 

let nameList = ['tom','bob','sam']

function challengeThree(name){
nameList.push(name)
console.log(`Your Name is ${nameList.length} on the list!`) // use ticks
}

challengeThree('bill')