// The cockroach is one of the fastest insects.Write a function which takes its speed in km per hour and returns it in cm
//  per second, rounded down to the integer(= floored).

// For example:

// 1.08 -- > 30
// Note! The input is a Real number(actual type is language dependent) and is >= 0. The result should be an Integer.

//solution 

function cockroachSpeed(s) {
    return Math.floor(s * 27.777778)
}

//peramiters 
//a number 

//result 
//a converted number from kilometers per hour to cm per pour 

//example 
// s= 1 then cm per hour = 27

//pseudo code 
// take s then mutliply by 27.7777 and return the result that is floored 

