// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//solution 

function grow(x){

    return x.reduce((a,c)=>a*c,1)
   
  }
  
  //peramiter 
  //array of integers 
  
  //result
  //return a the array with the numbers multiplyed to each other in order 
  
  //example 
  //[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
  
  //pseudo code 
  //use reduce method 
  