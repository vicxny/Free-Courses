//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. 
//Please create a function that reverses your list and prints it to the console. 

//Given two integer arrays a, b, both of length >= 1, 
//create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

//Given an array of integers as strings and numbers, 
//return the sum of the array values as if all were numbers.Return your answer as a number.


//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. 
//Please create a function that reverses your list and prints it to the console. 
let pokemon =['pika','trio','vulpix','digi']

function reverse(pokemon){
    pokemon=pokemon.reverse()
    console.log(pokemon)
}


//Given two integer arrays a, b, both of length >= 1, 
//create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
let a = [1,23,42,32]
let b = [1,2,53,64]

    function program(a,b){
        let aSum= a.reduce((acc,c)=> acc + c**2, 0)
        let bSum= b.reduce((acc,c)=> acc + c**3, 0)
         
        if (aSum>bSum){
            return true
        }
    }

//or
function program(a,b){
    return a.reduce((acc,c)=> acc + c**2,0)>b.reduce((acc,c)=> acc+c**3, 0)
}
// acc= accumulator
// c = current value



//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// explanation: 0 can not go to 22, 1 can go to -6, 2 can go to [3], 3 cannot go to [4]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
// use map or filter

function isMultiple(array){
    return array.filter((e,i)=> e%i===0)
}


//Given an array of integers as strings and numbers, 
//return the sum of the array values as if all were numbers.Return your answer as a number.
//["3","4","1","6"] => 14

let numList =[ '1',2,32,43,'2','3']

function conver(numList){
    let newNum =[]
    newNum.push()= numList.forEach(element => {
        Number(element)       
    });

    return newNum.reduce((acc,c)=> acc+0,0)
}
//or
function convert(numList){
    return numList.reduce((acc,c)=> acc+Number(c),0)
}

//or
function convert(numList){
    return numList.reduce((acc,c)=> acc+ +c,0)
}

// +c convert it to number you must include space