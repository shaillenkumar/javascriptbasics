// Function as arguments

var f1 = function(name){
    console.log(`Have a Good Day!  ${name} .`);
}

var f2 = function(a,name){
    a(name);
}

f2(f1, "Tim");