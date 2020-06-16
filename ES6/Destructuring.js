const numbers = [1,2,3];
[num1, num2] = numbers;
console.log(num1 , num2);
[x, y, z] = numbers;
console.log(x , z);

//object destructuring
{
    const person = {name:"Ajay", age:22, location:"Mumbai"}
    let name = person.name;
    let age = person.age;
    let location = person.location;
    console.log(name , age ,location);
}
{
    const person = {name:"Arvind", age:26, location:"New Delhi"}
    
    let {name,age,location} = person;
    console.log(name , age ,location);

}