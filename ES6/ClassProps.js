class Human {
    constructor(){
        this.gender = 'male';
    }
     printGender(){
         console.log(this.gender);
     }
}

class Employee extends Human{
    constructor(){
        //super();
        this.name = 'John';
    }
    printMyName(){
        console.log(this.name);
    }
}

const emp1 = new Employee();
emp1.printMyName();
emp1.printGender();