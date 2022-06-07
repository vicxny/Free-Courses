// Please create a function that takes in a number. 
// Print all the numbers from 1 to that number in the console, 
// but skip any number that when multiplied by three is divisible by 2.

function numMultiDiv(num){
    for(let i = 1; i<num; i++){
        if(num[i]*3%2 !== 0){
            console.log(i)
        }
    }
}