const name = "ayush"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ayush-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-3, 4)
console.log(anotherString);

const newStringOne ="    ayush.    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://ayush.com/ayush%20pahadi"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));


