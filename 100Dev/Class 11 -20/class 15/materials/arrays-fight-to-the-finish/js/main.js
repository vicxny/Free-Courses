//Create an array of movie titles. Loop through the array and each element to the h2.


//Create an array of numbers. Loop through the array and add three to each number and replace the old number.


//Find the average of all the numbers from question two













































//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ['tom', 'jerry', 'cat']


movies.forEach((item,i) => {
    document.querySelector('h2').innerText += item
})


for( let i = 0; i<movies.length; i++){
    document.querySelector('h2').innerText+= movie[i]
}


//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let number = [1,2,3,4]

for( let i = 0; i < number.length; i++){

}


 number.forEach((num,i)=> {
    number[i]= num+3        //4,5,6,7
 })
//Find the average of all the numbers from question two
let sum = 0
for(let i = 0; i<number.length; i++){
    sum+=number[i]
}

console.log(sum/number.length)

