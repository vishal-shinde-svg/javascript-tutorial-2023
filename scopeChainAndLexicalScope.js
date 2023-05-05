

// scop chain :
// The scope chain is used to resolve the value of the variable name in js
// Scope chain in javascript is lexically defined which means that we can see what the scope chain will be looking at the code 
// Ex. const pi = 3.14;
// So this value is that the scope chain will be looking easily at the code.
// At the we have Global scope which is the window object in the browser.


// Lexically Scop :

// Lexical scoping means now the inner function can get access to their parent function variable but ,(vices versa is not true)
// Parent functions can not get access to their child function variable.
// Example
let a = 'Hello Gyes...'
// this is called as parent function 
const first = () =>{
    let b  = 'hi how are you..'
    const seconde = () =>{
        // this is called as child funciton
    let c = 'Hi.. i am fine thanku..'
    console.log(a + " " + " " +  b + " "+ c);
    }
    seconde()
console.log(a + b + c); //here show the error 
// because it having lexical scope means you can not access child functon varialbe.
}
first();
