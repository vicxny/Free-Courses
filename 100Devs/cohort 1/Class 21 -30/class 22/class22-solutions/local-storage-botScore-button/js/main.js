//Create a button that adds 1 to a botScore stored in localStorage 


if(!localStorage.getItem('botScore')){
    localStorage.setItem('botScore', 0)
} // this is to prevent botscore from setting to zero when refreshing

document.querySelector('button').addEventListener('click', anothaOne)

function anothaOne(){
    let botScore = Number(localStorage.getItem('botScore'))
    botScore += 1
    localStorage.setItem('botScore', botScore)
}

