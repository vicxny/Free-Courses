//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function SkaterPlayer(name,age,specialMove,board){
    this.name = name,
    this.age = age,
    this.specialMove = specialMove,
    this.board = board

    this.quote =  function (){
        alert(`My name is ${name}`)
    }
    this.grind = function(){
        alert('I am the best grinder')
    }
    this.flip = function(){
        alert('I am the best flipper')
    }
}

let tonyHawk = SkaterPlayer('tony', 16, 'kickflip', 'wood')


class SkaterPlayer{
    constructor(name,age,specialMove,board){
        this.name = name,
        this.age = age,
        this.specialMove = specialMove,
        this.board = board
    }
        quote() {
            alert(`My name is ${this.name}`)
        }
        grind(){
            alert('I am the best grinder')
        }
        flip() {
            alert('I am the best flipper')
        }
}
