//Create a function that has a loop that prints your resolution 365 times to the console and then call that function



//Bonus can you make it print your resolution 365 times to the DOM?

{/* <h1>What is your new years resolution?</h1>

<input id="resolution" type="text" name="" value="">

<h2 id="letsGo"></h2> */}




//Create a function that has a loop that prints your resolution 365 times to the console and then call that function
// function loop365(){
//     for (let i = 0, i < 365, i++){
//         console.log()
//     }
//    }
   

// document.querySelector('h1').addEventListener('click', resloop)

// function resloop(){
//     let res = document.querySelector('#resolution').value
//     for(let i= 0; i<365; i++){
//         console.log(res)
//     }
// }


   //Bonus can you make it print your resolution 365 times to the DOM?
   
   {/* <h1>What is your new years resolution?</h1>
   
   <input id="resolution" type="text" name="" value="">
   
   <h2 id="letsGo"></h2> */}



document.querySelector('h1').addEventListener('click', resloop)

function resLoop(){
    let res = document.querySelector('#resolution').value
    for(let i= 0; i<365; i++){
        document.querySelector('#letsGO').innerText += ` ${res} `
    }
}

// ` ${res} ` template string