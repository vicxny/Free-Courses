// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

















// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question


let str = 'Is this the best week ever?'
alert(str.endsWith('?'))


//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let job = 'I work as a jr. dev.'
let newJob = job.replaceAll("jr. dev", "software engineer")
console.log(newJob)


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function game(){
    let choice = ['rock', 'paper','scissor']
    let random = choice[Math.random()*choice.length]
    return random
}

or 

function game2(){
    let random = Math.random()
    if (random<.33){
        console.log('rock')
    }else if (random<.66){
        console.log('paper')
    }else{
        console.log('scissor')
    }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function chechWon(n){
    let botChoice = game()
    if(n == botChoice){
        console.log('tie')
    }else if( n== 'paper' && botChoice == 'rock' || n== 'rock' && botChoice== 'scissor'|| n== 'scissor' && botChoice== 'paper'){
        console.log('You won')
    }else{
        console.log('You lost')
    }
}


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
let array = []

function loop (array){
array.foreach((x)=> console.log(x))
}