function divide(n1,n2){
    return new Promise((resolve,reject) => {
        if(typeof n1 !== 'number'){
            reject("First arg is not a number!"); 
        }
        if(typeof n2 !== 'number'){
            reject("Second arg is not a number!");
            
        }
        if(typeof n2 === 0){
            reject("Cannot Divide by Zero!");
        }
        resolve(n1/n2);
    });
}

console.log("Start Of Script!");
let a=10; b=5;
let result = divide(a,b);
result.then((res)=>console.log("The result is "+res));
result.catch((err)=>console.log("The error in divide is "+err));


let result2 = divide(15,3)
    .then((res)=>console.log("The result is "+res))
    .catch((err)=>console.log("The error in divide is "+err))
console.log("End Of Script");