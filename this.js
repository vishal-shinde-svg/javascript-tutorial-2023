// // this object refert to the current context.
// // this object have different value depending at where it places.


// // Example :1
// // this is refer to the courrent context that is show windows object.
// console.log(this);

// // example 2 
// // 
// function myName(){
//     console.log(this);
// }
// myName();


// // example 3 
// let myNames = ' vishal shinde';
// function name(){
//     console.log(this.myNames);
// }
// name();


// example 4
const obje = {
    myAge: 27,
    myName () {
        console.log(this)
    }
}
obje.myName();

Wx