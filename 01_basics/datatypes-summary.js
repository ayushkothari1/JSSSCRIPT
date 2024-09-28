//  Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 43848938734839447n




// Reference (Non-Primitive)

// Array, Object, Functions

const heros = ["shaktiman, naagraj, doga"]
let myObj = {
    name: "ayush",
    age: 19,
}

const myFunction = function (){
    console.log("Hello Word");
    
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction)
console.log(typeof heros)




// ++++++++++++++++++++++++ Memory +++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myCodername = "ayushKothari"

let anothername = myCodername
anothername = "ayushpahadi"

console.log(myCodername);
console.log(anothername);


let userOne = {
        email:"user@google.com",
        upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "ayush@google.com"

console.log(userOne.email);
console.log(userTwo.email);
