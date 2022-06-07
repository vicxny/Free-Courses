//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
function numToArr(num){
  let numArr = []
  for(let i = 1;i<num;i++){
    numArr.push(i)
  }
  return numArr
}
