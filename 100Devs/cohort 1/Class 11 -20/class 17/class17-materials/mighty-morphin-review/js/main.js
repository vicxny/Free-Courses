// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.


// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.


//*Loops*
//Create a function that takes in a number. 
// Console log the result of heads or tails using the previous function x times where x is the number passed into the function.
// Call the function.




// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday = 'CHRISTMAS'
favHoliday = holiday.toUpperCase()
console.log(favHoliday)


//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let variable = 'apple'
var lastFive = variable.substr(variable.length-3)


// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function outHundred(n1,n2,n3,n4,n5){
    let difference = 100-n1-n2-n3-n4-n5
    Alert(Math.abs(difference))
}


// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function highLow(m1,m2,m3){
    console.log(`lowest ${Math.min(m1,m2,m3)} , highest ${Math.max(m1,m2,m3)}`)
}


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function coinFlip(){
    let x = (Math.floor(Math.random() * 2) == 0);
    if(x){
    	return("heads");
    }else{
        return("tails");
    }
}

// return Math.random() < .5 ? 'heads':'tails'

//*Loops*
//Create a function that takes in a number. 
//Console log the result of heads or tails using the previous function x times where x is the number passed into the function.
//Call the function.
function numOfCoinFlip(n){
    for(let i = 0; i=n; i++){
       let result = coinFlip()
       console.log(result)
    }
}