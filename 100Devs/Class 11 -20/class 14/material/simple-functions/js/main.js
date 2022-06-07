//---Easy
//create a function that adds two numbers and alerts the difference

//create a function that divides two numbers and console logs the quotient

//create a function that multiplys four numbers and returns the product

//---Medium
//create a function that takes in four numbers. 
// Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the difference of the last two numbers

//---Hard
//create a function that takes in 4 numbers. 
// Multiply the first two numbers. 
// If the product is greater than 100 add the sum of the last two numbers and console log the value.
// If the product is less that 100, subtract the difference of the last two numbers and console log the value. 
// If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number


//---Easy
//create a function that adds two numbers and alerts the difference
function sumTwo(a,b){
    alert(a-b)
}

//create a function that divides two numbers and console logs the quotient
function divideTwo(c,d){
    console.log(c/d)
}

//create a function that multiplys four numbers and returns the product
function multiFour(q,w,e,r){
    return q*w*e*r
}

//---Medium
//create a function that takes in four numbers. 
// Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the difference of the last two numbers.
function mediumFour(n1,n2,n3,n4){
    return (n1+n2)/(n3-n4)
}

//---Hard
//create a function that takes in 4 numbers. 
// Multiply the first two numbers. 
// If the product is greater than 100 add the sum of the last two numbers and console log the value.
// If the product is less that 100, subtract the difference of the last two numbers and console log the value. 
// If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number.
function hardFour(m1,m2,m3,m4){
    const tot1 = m1*m2
    if (tot1>100){
        console.log(m3+m4)
    } else if (tot1<100){
        console.log(m3-m4)
    } else if (tot1 = 100){
        alert((tot1*m3)%m4)
    }
}
