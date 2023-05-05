// destructuring is assisment syntax is javascript expression that make it possible to unpack valur from  
// array or properties form objects into distinct variable.

// const info =['vishal','shinde', 27]

// // let myName = info[0];
// // let myLastName = info[1];
// // let myAge = info[2];
// console.log(myAge);

// destructuring the array following way
const info =['vishal','shinde', 27]
// let [myName, myLastName, age] = info 
// we can add value into the array using destructuring
let [myName, myLastName, age, myDegree='BE'] = info 
console.log('myDegree',myDegree);