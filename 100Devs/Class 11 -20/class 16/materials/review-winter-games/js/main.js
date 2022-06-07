//Create a function that takes in an array of numbers. 
// Return a new array containing every even number from the original array (do not use map or filter)



function newArrayEven(array){
    let newArray = []
    array.forEach((num,i) => {
        if( num %2 == 0){
            newArray.push(num)
        }
    });
    return newArray
}

newArrayEven([1,2,3,4,5])