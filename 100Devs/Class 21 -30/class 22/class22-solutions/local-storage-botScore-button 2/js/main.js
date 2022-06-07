//Create a button that adds 1 to a botScore stored in localStorage 
// Tip: Need button in html
// You need event listener that reset the bot score and use set item for update




localStorage.setItem('botScore',0) 
// set item sets it to Zero

document.querySelector('button').addEventListener('click',addBotScore)

// function addBotScore(){
//     let botScore = localStorage.getItem('botScore')
//     botScore += 1
//     localStorage.setItem('botScore', botScore)
// } wrong

function addBotScore(){
    let botScore = Number(localStorage.getItem('botScore'))
    botScore += 1
    localStorage.setItem('botScore', botScore)

}