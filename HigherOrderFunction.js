// Higher order function.
// function which take another function as an argument is called as HOf
// wo function jo dusare function as an argument accept karta hai use HOF kahate hai.

// callback function :
// function get pass as an argument to another funtion is called as call back funtion
// a callback funtion is function that is passed as an argument to another function to be called call back later time

// Ex.
// we need to create calculator 
// const add =  (a,b) =>{
//     return a+b;
// }
// console.log(add(5,6))

// const sub = (a,b) =>{
//     return Math.abs(a-b);
// }
// console.log(sub(5,6))

// const mul = (a,b)=>{
//     return a*b;
//  }
// console.log(mul(5,6))

// above code do the hardcoded for each operation which is bad 
// instead of that we will used callback function and Higher order function.
// we need to create calculator 
const add =  (a,b) =>{
    return a+b;
}
const sub = (a,b) =>{
    return Math.abs(a-b);
}
const mul = (a,b)=>{
    return a*b;
 }
// calculator is Higher ordered function 
// operators are callback function
 const calculator = (num1, num2, operator) =>{
    return operator(num1, num2)
    // abot Hof same as
    // add(num1, num2)
}
console.log(calculator(5,6,add));
console.log(calculator(5,6,sub));
console.log(calculator(5,6,mul));
