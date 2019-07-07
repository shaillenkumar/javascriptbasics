let i = 10;
const j = i;
i = 9;         // in primitive variable the copy is by value (and not byRef)
console.log(j); //no mutation in variable j.

// Mutation in Objects and Arrays
const person = {
    name :'Manu'
}
// In objects and arrays this creates a reference and not a actual value
const secondPerson = person;
person.name = "Max" // the changes in firstPerson changed SecondPerson so mutated scondPerson.
console.log(secondPerson);  

// Similarly in arrays.
let a = [0,1,2,3];
let b = a;          // copy by ref 
a.push(4);
console.log(b);     // see mutation/changes in b

// To prevent mutation - use spread operator
let c = [...a];     // copies only the array values.
console.log(c); 

const thirdPerson = {
    ...person       // copy only values of person
}
console.log(thirdPerson); 




