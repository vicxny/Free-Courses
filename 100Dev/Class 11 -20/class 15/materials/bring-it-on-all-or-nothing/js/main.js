// *Variables*
// Declare a variable, assign it a boolean, and alert the value


// Declare a variable, reassign it to your favorite color, and console log the value


// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.


// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.


// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string


//*Loops*
// Create a function that takes in a number. Console log all values from 1 to that number, 
// but if the number is divisible by 3 log "fizz" instead of that number, 
// if the number is divisible by 5 log "buzz" instead of the number, 
// and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number












// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let variable = true;
alert(variable)

// Declare a variable, reassign it to your favorite color, and console log the value
let var2 = 'red'
console.log(var2)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function sum4(n1,n2,n3,n4){
    result (n1+n2+n3)/n4
}
console.log(sum4(5,4,5,7))

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function pow2(n1,n2){
    console.log(Math.pow(n1,n2))
}
// or 
// n1**n2


// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function cond(boo, string){
    if(boo){
        alert(string)
    }else{
        console.log(string)
    }
}

// turnery
// b ? alert(string) :console.log(string)


//*Loops*
// Create a function that takes in a number. Console log all values from 1 to that number, 
// but if the number is divisible by 3 log "fizz" instead of that number, 
// if the number is divisible by 5 log "buzz" instead of the number, 
// and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function loopA(n){
    for (let i=1; i<=n; i++){
        if( n%3==0 && n%5==0){
            console.log('fizzbuzz')
        } else if (n%5==0){
            console.log('buzz')
        } else if (n%3==0){
            console.log('fizz')   
        } else{
            console.log(i)
        }
    }
}