// Please create a function that takes in an array of numbers and returns a new array that only contains odd numbers. 
// Review our last practice problem from last class if you need some ideas.

let newArry = []

function loopOdd(arr){
    for( let i=0; i<arr.length; i++){
        if( arr[i]%2 !== 0){
            newArr.push(arr[i])
        }
    }
    return newArry
}

arr.forEach((num) => {
    if( num%2 !== 0){
        newArr.push()
    }
});


function loopOdd(arr){
    for(const num of arr){
        if( num%2 !== 0){
            newArr.push()
        }
    }
}
