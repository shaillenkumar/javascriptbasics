//Let convert the fn to async fn . and use callback.

function divide(n1,n2, callback){
    if(typeof callback !== 'function'){
        throw ("call must be supplied!");
        return;
    }
    setTimeout(()=>{
        if(typeof n1 !== 'number'){
            callback("First arg is not a number!");
            return;
        }
        if(typeof n2 !== 'number'){
            callback("Second arg is not a number!");
            return;
        }
        if(typeof n2 === 0){
            callback("Cannot Divide by Zero!");
            return;
        }
        callback(null, n1/n2);
    },0);
}

console.log("Start Of Script!");
let a=10; b=5;
let c = divide(a,b,function callback(err, result){
    console.log("the result of division ",result)
});
console.log("End Of Script");
