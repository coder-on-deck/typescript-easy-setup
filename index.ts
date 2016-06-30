
class Student{
    fullName:string;
    constructor(public firstName, public middleName, public lastName){
        this.fullName = firstName + ' ' + middleName + ' ' + lastName
    }
}

interface Person{
    firstName:string,
    lastName:string
}

function hello(person:Person){
    return "hello " + person.firstName + ' ' + person.lastName
}

var student = new Student('ludmila','shaul','mograbi')
console.log(hello(student))