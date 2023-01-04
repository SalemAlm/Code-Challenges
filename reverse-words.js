// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//solution 

function reverseWords(str) {
    return str.split(' ').map(element => element.split('').reverse().join('')).join(' ')
}



//peramiters 
//string 

//result
//returned string reverse with the spaces between reserved 

//example
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//pseudocode 
//split string into words 
//map over array of words 
//split 
//reverse 
//join back into array of words 
//join back into string
//return string