// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//solution 

//my solution 

function findAverage(array) {

    if (array.length > 0) {
        let average = array.reduce((a, b) => a + b, 0) / array.length

        return average
    } else {

        return 0;
    }
}

//ideal solution 

var find_average = (array) => {
    return array.length === 0 ? 0 : array.reduce((acc, ind) => acc + ind, 0) / array.length
}