//--- Easy
//create a variable and assign it a boolean

//create a variable and assign it a string that is a number

//add 10 to that number - how?!? https://media.giphy.com/media/lkdH8FmImcGoylv3t3/giphy.gif

//print that number to the console

//--- Medium
//create a variable that holds a value from the input

//add 21 to that number

//alert that number

//--- Hard
//create a variable that holds the h1

//add an event listener to that element that places the product of the two previous variables in the DOM



//--- Easy
//create a variable and assign it a boolean
let easy = true;

//create a variable and assign it a string that is a number
let string = "5"

//add 10 to that number - how?!? https://media.giphy.com/media/lkdH8FmImcGoylv3t3/giphy.gif
string = Number(string)+5

//print that number to the console 
console.log(string)

//--- Medium
//create a variable that holds a value from the input
let medium = document.querySelector("input").value;

//add 21 to that number
medium+=21

//alert that number
alert(medium)

//--- Hard
//create a variable that holds the h1 (id = 'mrRightNow')
let hard= document.getElementById('#mrRightNow')

//add an event listener to that element that places the product of the two previous variables(id = 'needSomeTLC') in the DOM 
mrRightNow.addEventListener('click', stunt)
function stunt(){
    document.querySelector("#needSomeTLC").innerText = string*string
}

// Other
// Creates 2121
let hard= document.getElementById('#mrRightNow').addEventListener('click',funcAdd21);

function funcAdd21(){
    let medium = document.querySelector("input").value;
    medium+=21
    alert(medium)
}
// Creates 42
function funcAdd21(){
    let medium = Number(document.querySelector("input").value);
    medium+=21
    alert(medium)
}