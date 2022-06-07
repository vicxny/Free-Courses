//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

//Create a function that takes string
//Print the reverse of that string to the console

//Create a function that takes in a string
//Alert if the string is a palindrome or not



//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let numbers = [1,23,53,34]
alert(numbers.reduce((acc, b) => acc + b, 0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function update (numbers){
    return numbers.map(x => x**2);
}

let update = numbers.map(x => x**2)


//Create a function that takes string
//Print the reverse of that string to the console

let string = ' '
function reverse (string){
   console.log( string.split('').reverse().join(''))

}

let func = (arg1, arg2, argN) => expression
let reverse = string => console.log( string.split('').reverse().join(''))
// https://javascript.info/arrow-functions-basics



//Create a function that takes in a string
//Alert if the string is a palindrome or not //	A word, phrase, verse, or sentence that reads the same backward or forward. 


let palidrome = (str == reverse(str)) ? 'is a palindrome': 'is not a palindrome'

let palidrome2 = str => str===str.split('').reverse().join('')

let result = condition ? value1 : value2;


// https://javascript.info/ifelse#conditional-operator