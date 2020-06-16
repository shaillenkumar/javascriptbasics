function print(x){
    setTimeout(
        ()=>{console.log(x)},0);
}
function addFn(m,n,callbackFN){
    let c = m+n;
    callbackFN(c);
}


console.log("Start of Program!")
addFn(3,4,print);
console.log("End of Program!")


