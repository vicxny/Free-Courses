// *Variables*
// Create a variable and console log the value
let variable = 10
console.log(variable)
// Create a variable, add 10 to it, and alert the value
let a = 5
a+=10
alert(a)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function difference(a,b,c,d){
  alert(a-b-c-d)
}
// Create a function that divides one number by another and returns the remainder
function remainder(a,b){
  return a%b
}
remainder(10,7)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(a,b){
  let sum = a+b
  if (sum>50){
    alert("jumanji")
  }
jumanji(40,32)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(a,b,c){
  let multi = a*b*c
  if (multi%3 === 0){
    alert("ZEBRA")
  }

//*Loops*
//Create a function that takes in a word and a number.
// Console log the word x times where x was the number passed in

function loop(word,num){
  for (let i = 1; i <= num; i++) {
    console.log(word);
  }
}
