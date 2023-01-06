// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//solution 

function highAndLow(numbers){
    let sorted = numbers.split(' ').map(Number).sort((a,b)=>b-a)
   
   let highest= sorted[0]
   let lowest= sorted[sorted.length-1]
   return `${highest} ${lowest}`
   }
   
   //peramiters
   //a string of numbers
   //result
   //a string with two numbers in it, the first being the lowest of the input string and the seond being the highest of the input
   
   //example
   //highAndLow("1 2 3 4 5");  // return "5 1"
   //highAndLow("1 2 -3 4 5"); // return "5 -3"
   //highAndLow("1 9 3 4 -5"); // return "9 -5"
   
   //pseudocode
   //split array into individual numbers 
   //map over individual numbers and make them Numbers with the Number()
   //sort in ascending orcder 
   //create two variables, one with the lowest and one with the highest 
   //return using `${}`
   
   