// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)


// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.


// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.


// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.


// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food = 'chicken'
food = 'pork'
alert(food)


//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN) // string.substr(start, length)
let string = 'pencil'
alert(string.substr(2, 1))



// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function func(n1,n2,n3){
    alert ((n1/n2)*n3)
}

// show only two decimal place use .tofix(2)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function func2(n){
    console.log(Math.cbrt(n))
}


// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function cond(month){
   let lcMonth = month.toLowerCase()
    if(lcMonth === 'june' || lcMonth === 'july' || lcMonth === 'august'){
        alert('YAY')
    }else(
        alert('Boo')
    )
}

lcMonth === 'june' || lcMonth === 'july' || lcMonth === 'august' ?  alert('YAY'): alert('Boo')

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5. Hint Modules
function loop(nm){
    for(let i = 1; i<=nm; i++){
        if(i%5!==0){
            console.log(i)
        }
    }
}

// let func = (arg1, arg2, ..., argN) => expression

// let func = function(arg1, arg2, ..., argN) {
//     return expression;
//   };
