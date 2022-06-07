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
let array = [1,2,3,4]
alert(array.reduce((acc,c) => acc+n,0)

// reduce is adding to new accumulator=acc with c = array[i] and start at i=0



//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function square(array){
    return array.map(x => x ^ 2)
}


//Create a function that takes string
//Print the reverse of that string to the console
function reverse(string){
    for( let i = string.length; i>string; i--){
        console.log(string[i])
    }
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not
// A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as madam or racecar.

