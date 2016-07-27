'use strict'
import {Person, Student} from './Person'
import fs = require('fs')

function meth(){
    return function(obj:Object,key:string,descriptor:TypedPropertyDescriptor<Object>){
        console.log('meth decorator',arguments)    
    }
}

function clas(){
    return function(a:any){
        console.log('class decorator', arguments)
    }
}

function prop(){
    return function(obj:any, key:string){
        console.log('prop decorator', arguments)
    }
}

function param(){
    return function(obj:any, key:string, index:number){
        console.log('param decorator', arguments)
    }
}

@clas()
class Greeter {
    @prop()
    public time:Date = new Date()
    // @meth()
    hello( @param() person:Person):string {
        return "hello " + person.firstName + ' ' + person.lastName
    }
}

let student = new Student('foo','bar','zoom')
console.log(new Greeter().hello(student))
console.log(new Greeter().time)