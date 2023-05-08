
// cloure
// Closure in javascript 👍
// Closure is the combination of the function bundled together (enclosed) with references to its surrounding state (The lexical environment)
// In other words a clouser gives you access to an outer function’s scope from an inner function.
// In javascript clouser are created every time a function is created at function creation time.


// const outerFuncton = (a) =>{
// let b = 10;
//     const innerFunction = () =>{
//         let sum = a+b;
//         console.log(`The sum of given numbe is ${sum}`);
//     }
//     innerFunction()
// }
// outerFuncton(5);



// another exampel

const outerFuncton = (a) =>{
    let b = 10;
        const innerFunction = () =>{
            let sum = a+b;
            console.log(`The sum of given numbe is ${sum}`);
        }
       return innerFunction;// here you can not call functon simply return the function.
    }
    let checkClosure =  outerFuncton(5);
    console.log(checkClosure);
    console.log(checkClosure());