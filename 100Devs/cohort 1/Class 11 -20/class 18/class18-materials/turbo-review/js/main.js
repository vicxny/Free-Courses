// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.











// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = 'cola'
favDrink= favDrink.trim
console.log(favDrink)


//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multiWord = ['pear','apple','peach']

var  apple  = multiWord.includes("apple");

let multiWord = 'pear apple peach'
if( multiWord.search('apple') ==-1) {
    console.log("no")
    } else{
        console.log('yes')
    }


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function cpuChoice(){
    let choice = ['rock', 'paper','scissor']
    let random = choice[Math.random()*choice.length]
    return random
}


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function userChoice (n){
    if (n=='rock'&& cpuChoice()=='scissor' || n =='paper'&& cpuChoice()=='rock' || n=='scissor'&& cpuChoice()=='paper' ){
        console.log('won')
    }else if (n == cpuChoice){
        console.log('tie')
    }else{
        console.log('lose')
    }
}


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
let choices = []

function games(){
    choices.forEach(game => console.log(game))
}


