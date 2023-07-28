let hello : string = '123'

hello = '1234'

console.log(hello);

// object
interface User {
    name: string,
    age: number,
    isValid: boolean,
    email: string | null 
}

const userA: User = {
    name : 'Heropy',
    age: 25,
    isValid: false,
    email: null
}

const userB: User = {
    name : 'Neo',
    age: 52,
    isValid: true,
    email: 'email@email.email'
}

// function
const add = function (x:number, y:number) : number {
    return x + y
}

const a: number = add(1,2)

const prints = function() : void {
    console.log('Hello world');
}

// void 
const h : void = prints()

console.log(h)

// any
let anything: any = 'Hello world'

// unknown
const unknown: unknown = 123

// Never , 아무것도 할당 할 수 없음
// const nev: never [] = []
const nev: [] = []
// nev.push(3);

// union
let union: string | number[]
union = 'a'
union = [3]

let union2: (string | number)[]
union2 = ['a',5]
union2 = [3]

// intersection
interface Member {
    name: string,
    age: number
}

interface Validation {
    isValid: boolean
}

const heropy: Member & Validation = {
    name:'Heropy',
    age: 85,
    isValid: true
}