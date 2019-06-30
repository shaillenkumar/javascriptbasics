// explanation for 'this'

var person = {
    "firstname": "Jim",
    "lastname": "Carey",
    "getFullName": function(){
        return(`${person.firstname} ${person.lastname}`)
    }
}

var fullname = person.getFullName();
console.log("fullname1 -> "+fullname);

var person2 = person;

person = {};

fullname = person2.getFullName();
console.log("fullname2 -> "+fullname);
