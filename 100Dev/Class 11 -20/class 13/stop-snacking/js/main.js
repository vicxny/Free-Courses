//Create a function that grabs the number of snacks from the input and tells you to stop that many times


document.querySelector('#help').addEventListener('click', stopSnack)
function stopSnack(n){
  let numOfSnacks= Number(document.querySelector('input').value)
  for (let i = 0; i < numOfSnacks; i++) {
    document.querySelector('#stop').innerText += ' stop! '
  }
  }
}
