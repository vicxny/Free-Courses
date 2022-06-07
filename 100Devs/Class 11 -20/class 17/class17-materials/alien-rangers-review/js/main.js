//Arrays

//Create and array of tv shows. Loop through and print each show to the console

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number





//Arrays
for (let i = 0; i < myArray.length; i++) {
    // Use myArray[i] to access each array element one by one
  }
  
  myArray.forEach(myElement => {
    // Use myElement to access each array element one by one
  });
  
  for (const myElement of myArray) {
    // Use myElement to access each array element one by one
  }


  
//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ['pokemon', 'friends', 'bleach']
for ( let i = 0; i<tvShows.length; i++){
    console.log(tvShows[i])
}

tvShows.forEach(show => console.log(show) )

for (const show of tvShows) {
    console.log(show)
}
   


//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let array = [1,4,3,5,6,7]
let nArray = []

for ( let i = 0; i<array.length; i++){
    if (array[i]%2 === 0){
        nArray.push = array[i]
    }
}


// filter or  map() method creates a new array
function onlyEven(arr){
    return arr.filter(num => num%2 ===0)
}
console.log(onlyEven(array))


let onlyEven = arr => arr.filter(num => num%2 ===0)

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest numbers
function secondBest(arr){
    let sorted = arr.sort((a,b)=>a-b)
        alert(sorted[1], sorted[sorted.length-2])
}