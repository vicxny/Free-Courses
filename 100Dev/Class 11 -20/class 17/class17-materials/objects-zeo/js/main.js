//Create a stopwatch object that has four properties and three methods

let stopwatch ={}

stopwatch.price = 30
stopwatch.size = 'small'
stopwatch.brand = 'nike'
stopwatch.color = 'black'

stopwatch.start = function(){console.log('start')}
stopwatch.stop = function(){console.log('stop')}
stopwatch.alertBrand = function(){alert(stopwatch.brand)}

stopwatch.alertBrand()