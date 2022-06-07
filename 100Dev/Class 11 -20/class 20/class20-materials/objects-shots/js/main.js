//The user will enter a cocktail.
// Get a cocktail name, photo, 
// and instructions and place them in the DOM
// https://www.thecocktaildb.com/api.php


// example
// fetch("https://dog.ceo/api/breeds/image/random")
// .then(res => res.json()) // parse response as JSON
// .then(data => {
//   console.log(data)
// })
// .catch(err => {
//     console.log(`error ${err}`)
// });

document.querySelector('button').addEventListener('click',getDrink)

// Based on API drinks


// function getDrink(){
//     let drinkChoice = document.querySelector('input').value
//     const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s= " + drinkChoice

//     fetch(url)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data)
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });
    
// }



// look into drink object and use the first array

// function getDrink(){
//     let drinkChoice = document.querySelector('input').value
//     const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s= " + drinkChoice

//     fetch(url)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data.drinks[0])
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });
    
// }



// Now replace html using DOM 
// <h2>Name</h2>
// <img src="" alt="">
// <h3>Instructions</h3>

function getDrink(){
    let drinkChoice = document.querySelector('input').value
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+drinkChoice
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data.drinks[0])
          document.querySelector('h2').innerText = data.drinks[0].strDrink
          document.querySelector('img').src = data.drinks[0].strDrinkThumb
          document.querySelector('h3').innerText = data.drinks[0].strInstructions
  
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

// refresh and search item