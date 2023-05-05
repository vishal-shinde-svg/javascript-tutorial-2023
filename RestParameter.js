
// rest parameter is an improved way to handle function parameter allowing us to 
// more easily handle various input as parameter in a function.
// the rest parameter syntax allow us represent an infinite number of argument as 
// an array.

// before rest parameter...
// function sum(a,b){
// console.log(a+b);
// }
// sum(1,2,3,4,5);

// after spread operator 
// function sum(...input){
//     // rest parameter syntax allow us to represent an infinite number of argument as an arry
//     console.log(input); 

//     // if you want only accept value in rest parameter so you used spread operator
//     console.log(...input);
//     // console.log(a+b);
//     let total =0;
//     for (let i of input){
//          total = total + i;
//     }
//     console.log('total', total);
//     }
//     sum(1,2,3,4,5);

    // another example...

function fun(a,b,...c){
        console.log(`value of ${a} and ${b}`);
        console.log(`value of c ${c}`);
        console.log('value of c[0]', c[0]);
        console.log('length of c', c.length);
        console.log('index of', c.indexOf('vishal'));
}
fun('hi', "hello",'vishal', 'fine');