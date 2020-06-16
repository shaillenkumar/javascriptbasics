//Execution happens in synchronize way.

function divide(n1,n2){
    if(typeof n1 !== 'number'){
        throw "First arg is not a number";
    }
    if(typeof n2 !== 'number'){
        throw "Second arg is not a number";
    }
    if(typeof n2 === 0){
        throw "Cannot Divide by Zero";
    }
    return n1/n2;
}

console.log("Start Of Script!");
let a=10; b=5;
let c = divide(a,b);
console.log("the result of division",c)
console.log("End Of Script");
