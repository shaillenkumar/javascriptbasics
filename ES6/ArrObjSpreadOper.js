const numbers = [1,2,3,4,5]

const newNumbers = [...numbers];
const newNumbersPlus = [...numbers,6,7]

console.log(newNumbers);
console.log(newNumbersPlus);

const person = {
    name: 'Max'
}

const newPerson = {
    ...person,
    age: 21

}

console.log(newPerson)

const filter = (...args) => {
    return args.filter(el => (el ==300))
}

console.log(filter(1,2,300,4))