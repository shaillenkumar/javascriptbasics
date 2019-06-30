//Default arguments - arguments 'argument'

var add = function(a,b){
    var i,sum=0;
    for(i=0;i<arguments.length;i++){
        sum = sum + arguments[i];
    }
    return sum;
}

var res = add(2,8,1,10,2,7,5);
console.log("Sum = "+res);
