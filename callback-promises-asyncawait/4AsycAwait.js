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

async function test(){
    try{
        let result = await divide(20,4);
        console.log("Result of division is "+result);
    }catch(err){
        console.log("There was a error in division!")
    }
}

console.log("Start Of Script!");
let res = test();
console.log("End Of Script!");