// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 23)
// let myCreatedDate = new Date(2024, 0, 23, 5, 3)
// let myCreatedDate = new Date("2024-01-14")
let myCreatedDate = new Date("01-14-2024")
console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.round(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getMonth() + 1);//month start from 0-11
// console.log(newDate.getDate());
// console.log(newDate.getDay());


// `${newDate.getDay()} and time is ${}`

// console.log(newDate.toLocaleString('default', {
//     weekday: "long",
//     timeZone: ''
// }))