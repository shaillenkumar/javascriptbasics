var myarr = [2, 4, 8 ,5];



var sum = 0;
myarr.forEach( function(item, index, array){
    sum = sum + item;
});
console.log("Sum "+sum);
