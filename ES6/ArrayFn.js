// The map() method creates a new array with the results of calling a provided function on every element in the calling array.
var array1 = [1, 4, 9, 16];
const f = (x,i) => {
    console.log(i);
    return x * 2;
}
// pass a function to map
const map1 = array1.map(f);
console.log("Map -> " +map1);

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const fn3 = (word) => {
    return word.length > 6;
}
const result = words.filter(fn3);
console.log(" Filter -> "+result);



// The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
var array1 = [5, 12, 8, 130, 44];
const fn1 = (x) =>  (x > 10);
var found = array1.find(fn1);
console.log(found);

// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
const fn2 = (x) =>  (x > 10);
var foundIndex = array1.findIndex(fn2);
console.log(foundIndex);


