
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(Number1, Number2){
//     console.log(Number1 + Number2)
// }
// addTwoNumbers(3, 5)

function addTwoNumbers(Number1, Number2){

    // let result = Number1 + Number2
    //  return result
    return Number1 + Number2
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result)


function loginUserMessage(username = "sam") {
    if(!username){
        console.log("please enter a username");
        return
     }
    return `${username} just logged in`
}

// console.log(loginUserMessage("ayush"))
// console.log(loginUserMessage("hitesh"))

function calculateCartPrice(val1, val2, ...num1){
  return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "ayush",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username}  and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
return getArray[0]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 100, 600]))