// Hoiesting in javascript are machenisam where variable and function declaration move to the 
// top of the their scope before the code executipn
// =javascript Hoisting allows you to use functions and variables before they are declared.

// console.log('myName',myName);
// // Here console.log are not defined any errro it show undefined.
// var myName;
// myName='vishal'

// if you used the let and const its show refrences error because hoisting are
// not allowed in let and const. (its haveing block sxope)
console.log('myName',myName);
// Here console.log are not defined any errro it show undefined.
let myName;
myName='vishal'

console.log('myName',myName1);
// Here console.log are not defined any errro it show undefined.
// const myName1; // is show error because declaration must be initialized.
myName1='vishal'