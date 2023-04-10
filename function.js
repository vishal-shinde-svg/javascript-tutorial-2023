// // function is block of code design to perform a particular task.
// // function declaration and calling
// function sum() {
//     var a = 10
//     var b = 20
//     var total = a + b;
//     console.log(total)
// } sum();


// // 1. function parameter
// function sub(a, b) {  // function parameter
//     var result = a - b
//     console.log(" result ", result)
// } sub(10, 20) // function argument

// 2.function expression :
// create function and put it into the variable

// function sum(a, b) {
//     var total = a + b;
//     console.log('total ', total);

// }
// var functionExpression = sum(20, 30)  // also called return output
// //   another way is
// functionExpression;

//  3. in function expression you have to used return keyword
// it stop the execution of function and return value and pass this value to the callers
// function mul(a, b) {
//     return a * b;
// }
// var functionExpression = mul(10, 20);
// console.log('functionExpression', functionExpression);


// 4.  Anonymous function )(with out name )

// var x = function (a, b) {
//     return total = a + b

// }
// console.log(x(10, 20));


// 4. default arguments.
// default function parameter allow name parameter to be initialized with default value 
function name(firstName, lastName = 'shinde') {
    // last name is default parameter
    return fullName = firstName + lastName;
} console.log(name('vishal '));