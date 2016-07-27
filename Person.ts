export interface Person{
    firstName:string,
    lastName:string
}


export class Student{
    fullName:string;
    constructor(public firstName, public middleName, public lastName){
        this.fullName = firstName + ' ' + middleName + ' ' + lastName
    }
}