// var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    // var c = 15
    // console.log("INNER:", a );
    
}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "ayush"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}

// one()

if (true) {
    const username = "ayush"
  if (username === "ayush") {
    const website = " youtube"
    console.log(username + website)
}

// console.log(website);

}
// console.log(username);



// ++++++++++++++++++ interesting ++++++++++++++++


console.log(addone(3))
function addone(num){
     return num + 1
}


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(4))
