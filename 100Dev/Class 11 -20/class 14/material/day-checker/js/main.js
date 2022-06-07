//Create a conditonal that checks the day
//If Tuesday or Thursday, tell them they have class
//If Saturday, tell them they have Office Hours
//If Friday and House Turing, they have private office hours
//If Wednesday and House Hopper, tell them they have private office hours
//If Monday and House Hamilton, tell them to book a 1on1
//If any other day or wrong house, tell them to study



//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph


//Create a conditonal that checks the day
//If Tuesday or Thursday, tell them they have class
//If Saturday, tell them they have Office Hours
//If Friday and House Turing, they have private office hours
//If Wednesday and House Hopper, tell them they have private office hours
//If Monday and House Hamilton, tell them to book a 1on1
//If any other day or wrong house, tell them to study

if (whatDay == 'tuesday' || whatDay =='thursday'){
    console.log('You Have Class.')
} else if (whatDay == 'Saturday'){
    console.log('You Have Office Hours')
} else if  (whatDay == 'Friday' && whatHouse == 'House Turning'){
    console.log('Private Office Hours')
} else if  (whatDay == 'Wednesday' && whatHouse =='House Hamilton'){
    console.log('Book One on One')
} else{
    console.log('Study')
} 


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

{/* <label for="whatDay">What Day Is It?</label>
<input id="whatDay" type="text" name="" value="">
<label for="whatHouse">What House Are You In?</label>
<input id="whatHouse" type="text" name="" value=""> */}

// document.querySelector().addEventListener('click',)

document.querySelector('h1').addEventListener('click', dayCheck)

function dayCheck(){
    const whatDay = document.querySelector('#whatDay').value.toLowerCase()
    const whatHouse = document.querySelector('#whatHouse').value.toLowerCase()
    console.log(whatDay, whatHouse)
}


