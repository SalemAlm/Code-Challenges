// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

//solution 
function litres(time) {
    return Math.floor(time*0.5)
  
  }
  
  //peramiters 
  // a number, can be a full number or decimal but not negative 
  
  //result
  // a number that is rounded to the smallest value
  
  //example
  //time = 3 ----> litres = 1
  
  // time = 6.7---> litres = 3
  
  // time = 11.8--> litres = 5
  
  //pseudo code
  //multiply time by 0.5 
  //flatten the number (round to lowest value)
  //return number 
  