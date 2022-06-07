// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method

//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it 

// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible

// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) 
// and determines if they won a game of rock paper scissors against a bot using the above function








// *Variables*
// Declare a variable and assign it to a sentence that is a positive affirmation. 
// Print the affirmation to the console multiple times using a method
const sentence = 'You can do it'

let positiveAff = 'You are beautiful'
console.log(`Again: ${positiveAff.repeat(24)}`)



//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it 
let array = ['a','p','p','l','e']
alert(array.join(''));



// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible
function random(){
    let rand = Math.random()
    if(rand< .2){
        console.log('rock')
    }else if(rand< .4){
        console.log('paper')
    }else if(rand< .6){
        console.log('lizard')
    }else if (rand<.8){
        console.log('spock')
    }else{
        console.log('scissors')
    }
}

// or switch case



// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) 
// and determines if they won a game of rock paper scissors against a bot using the above function
let choice =['rock','paper','scissors','lizard','spock']
let cpu = random()

function game(n){
    if(n=='rock' && cpu == 'scrissor' || n=='paper' && cpu == 'rock' || n=='scissor' && cpu == 'paper'){
        console.log('You won')
    }else if(n==cpu && n !== 'spock' && n !== 'lizard'){
        console.log('Tie')
    }else if( n == 'lizard' || n== 'spock' ){
        console.log('This can not play the game')
    }else{
        console.log('This can not play the game')
    }
}
