//task 1

let user = {
    name: John,
    surname: Smith,
}
user.name = 'pete'
delete user.name

//task 2
let bag = {}

alert(isEmpty(bag))

//task 3

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0

for (let key in salaries) {
    sum += salaries[key]
}

//task 4 couldnt figure it out but understood the answer, will redo task later

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}