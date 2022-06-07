//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


// class MakeCar{
//     constructor(carMake, carModel, carColor, numofDoors){
//         this.make = carMake
//         this.model = carModel
//         this.color = carColor
//         this.door = numofDoors
//     }
//     honk(){
//         alert('Beep')
//     }
// }
// let hondaCivic = new MakeCar('Honda','Civic', 'silver', 4)

// ||

// function MakeCar (carMake, carModel, carColor, numofDoors){
//     this.make = carMake
//     this.model = carModel
//     this.color = carColor
//     this.door = numofDoors
//     this.honk = function(){
//             alert('Beep')
//         }
// }

class NetflixShow{
    constructor(showTitle, showGenre, showSeason, showRating){
        this.title = showTitle
        this.genre = showGenre
        this.season = showSeason
        this.rating = showRating
    }
    add(){
        alert('Added to list')
    }
    rateIt(){
        alert('Just Rated')
    }
    remove(){
        alert('Removed from recommended')
    }
}

let friends = new NetflixShow('friends','comedy',14, 8)