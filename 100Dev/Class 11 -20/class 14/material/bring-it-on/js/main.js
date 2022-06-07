// *Variables*
// Create a variable and alert log the value

// Create a variable, add -15 to it, and print the value to the console

// *Functions*
// Create a function that multiplys 4 numbers and alerts the product

// Create a function that divides one number by another and returns the remainder plus 10

// *Conditionals*
// Create a function that adds three numbers and if the sum is greater than 1000 alert "Block Party"

// Create a function that divides five numbers and if the quotient is divisible by 5 alert LINCOLN

//*Loops*
//Create a function that takes in a word and a number. Console log the word x cubed times where x was the number passed in




// *Variables*
// Create a variable and alert log the value
let var1 = 'Hi'
alert(val1)

// Create a variable, add -15 to it, and print the value to the console
let var2 = 100
var2+=-15
console.log(var2)

// *Functions*
// Create a function that multiplys 4 numbers and alerts the product
function FourNum(n1,n2,n3,n4){
    alert(n1*n2*n3*n4)
}

// Create a function that divides one number by another and returns the remainder plus 10
function idk(a1,a2){
    return a1%a2+10
}
console.log(idk(19,10))

// *Conditionals*
// Create a function that adds three numbers and if the sum is greater than 1000 alert "Block Party"
function sumThree(m1,m2,m3){
    let s3 = m1+m2+m3
    if( s3 > 1000){
        alert("Block Party")
    }
}

// Create a function that divides five numbers and if the quotient is divisible by 5 alert LINCOLN
function divideFive(x1,x2,x3,x4,x5){
    let result = x1/x2/x3/x4/x5
    if (result%5==0){
        alert('LINCOLN')
    }
}


//*Loops*
//Create a function that takes in a word and a number. Console log the word x cubed times where x was the number passed in

function loopWord(word,num){
    for(let i = 0; i < Math.pow(num,3);i++){
    console.log(word)
    }
}


// or
// function loopWord(word,num){
//     for(let i = 0; i < num**3; i++)
// }



// Horoscope
// document.querySelector('button').addEventListener*=('click', getHoroscope)

// function getHoroscope(){
//     let month = document.querySelector('#month').value.toLowerCase()
//     let day = Number(document.querySelector('#day').value)

//     if ((month === 'oct' && day >3 )|| (month === 'nov' &&day <=22)){
//         console.log('Scorpio');
//     }else if
// }


// Calculator
// document.querySelector('#add').addEventListener('click', add)

// function add(){
//     let num1 = Number(document.querySelector('#num1').value)
//     let num2 = Number(document.querySelector('#num2').value)
//     let sum = num1+num2
//     document.querySelector('#result').innerTect = sum
//     document.querySelector('#num1').value = ' '
//     document.querySelector('#num2').value = ' '
// }