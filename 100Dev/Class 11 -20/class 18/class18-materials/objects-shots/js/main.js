//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click',name)


function name (){
    const url =''

    fetch(url)
    .then(res => res.json())
    .then( data =>{
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}