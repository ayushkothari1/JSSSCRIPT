// if
const isUserLoggedIn = true
const temperature = 41

// if (temperature === 40) {
//     console.log("less than 50")
// } else{
//     console.log("temperature is greater than 50");
// }

// console.log("execute");



// <, >, <=, >=, ==, !=, ===

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`)
// } else {
    
// }
// console.log(`user power: ${power}`)

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");// not encorraging practice

// if (balance < 500) {
//     console.log("less than 500");   
// } else if (balance < 750) {
//     console.log("less than 750");  

// } else if (balance < 900) {
//     console.log("less than 900");   
// } else{
//     console.log("less than 1200");   
// }


const UserLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if (UserLoggedIn && debitCard && 2 == 2) {
    console.log("Allow to buy Course");
    
}
if (LoggedInFromGoogle || LoggedInFromEmail) {
    console.log("User logged in")
}