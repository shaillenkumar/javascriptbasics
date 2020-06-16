// reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The reducer function takes four arguments:
//  1. Accumulator (acc)
//  2. Current Value (cur)
//  3. Current Index (idx)
//  4. Source Array (src)
// reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array and ultimately becomes the final, single resulting value.
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4
console.log("Reducer1 -> "+array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log("Reducer2 -> "+array1.reduce(reducer, 5));
// expected output: 15

const reducerFn = (acc, val) => {
    acc = acc + (val * 10)
    return acc;
}
let result = array1.reduce(reducerFn);
console.log("Reducer3 ->"+result);