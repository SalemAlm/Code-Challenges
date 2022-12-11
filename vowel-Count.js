
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.



//solution
function getCount(str) {
    let counter=0
    let vowels='aeiou'
    
    for (let i=0; i<str.length;i++){
   
    if (vowels.includes(str[i])){
        counter++
        }
    }
     return counter
   }
   
   //peramters 
   //string, lowercase only possibly with spaces
   
   //return 
   // number of vowels in the string (a,e,i,o,u)
   
   //examples
   //getCount('salem')
   //result=2
   
   //pseudo code 
   //declare counter var 
   //loop through the input, with a condition that has a method to identify vowels 