//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class ExpressoMachine {
    constructor(){
        this.color = color
        this.make = make
        this.model = model 
        this.price = price

    }
    start(){
        console.log('Starting the make express')
    }
    stop(){
        console.log('Turning Off')
    }
    steam(){
        console.log('Build steam')
    }
}

let gaggia = new ExpressoMachine('red', 'Gaggia', 'Classic', 'Pro', 400)