// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//my solution: 

function solution(str, ending) {
    let starting = str
    let end = ending
    return starting.endsWith(end) ? true : false;

}

//better solution: 

function solution(str, ending) {
    return str.endsWith(ending);
}