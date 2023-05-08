// function curryig
// function Curring is fechnique for evaluating function with multiple argument into sequence of function
// wiht single argument .

// function sum( num1) {
//     return function (num2){
//         // console.log(num1,num2);
//         return function(num3){
//             console.log(num1+num2+num3);
//         }
//     }
// }
// sum(3)(4)(5);


// also we have to defined in single line using arrow function

const sum1 = (num1)=> (num2)=> (num3)=>console.log( num1+num2+num3); 
sum1(3)(4)(5);