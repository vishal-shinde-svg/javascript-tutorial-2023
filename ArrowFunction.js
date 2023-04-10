// // arrow function shorter way to write function
// //  how to convert normal function into arrow function

// 1.
// function sum1() {
//     let a = 10, b = 20;
//     let sum = a + b;
//     console.log(sum);
// } sum1()

// // this normal function converted into the arrow function
// 4
// const sum = () => {
//     let a = 10, b = 10;
//     return a + b
// }
// console.log(sum())
// // if you declare the arrow function you need to call the function in above way..

// // 3
// const sum = () => {
//     let a = 20, b = 30;
//     return `the sum of tow numbers ${a + b}`
// }
// console.log(sum());

// // 4.
// // if you defined arrow function in single line so there is no need to write return keyword.
// const sub = (a, b) => a - b;
// console.log(sub(10, 20));


// differences between normal function and arrow function
//  normal function :

// // first call and then declare
// console.log(sum(10, 20));
// function sum(a, b) {
//     return ` the sum of two numbers ${a + b}`;
// }

// //  arrow function

// const sum1 = (a, b) =>
// // in arrow function need to declare first then defined it
// {
//     return `sum of two number ${a + b}`
// }
// console.log(sum1(20, 30));


// 2
// using new Keyword (normal function)
// let subtract = function (a, b) {
//     console.log(a - b)
// }
// new subtract(10, 5)

// // arrow function not constructable so no need to used new keyword.

// let sub = (a, b) => {
//     return a - b;
// }
// console.log(new sub(10, 5));


// 2.using this Keyword.
// in normal function you have to used this key word.

// let testObject = {
//     a: 5,
//     getValueInRegular() {
//         console.log('value of the regular function ' + this.a)
//     }
// }
// testObject.getValueInRegular();

// // but arrow function we can not used this keyword directly into arrow function because it does not conation its own this.

// let testObject1 = {
//     // this is a object you have to used : 
//     a: 6,
//     getValueInRegular1: () => {
//         console.log("the value of a in arrow function ", this.a)
//     }
// }
// testObject1.getValueInRegular1();
// if you used this keyword it return undefined.

// so solved this problem we need to bind this keyword into this arrow function.

// a = 3;
// constructor(){
    
//     this.getValueInRegular3 = this.getValueInRegular3.bind(this)
// }


// getValueInRegular3 = () => {
//     console.log('the value of the a is ' + this.a);

// }