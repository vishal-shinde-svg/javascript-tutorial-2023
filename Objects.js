// object simply key : value pair data structure
// way to defined object

// let biodata = {
//     name : 'vishal',
//     age : 29
// }

// also inside the object you have to defined the function 
// to get the data from objets you have to used object name (dot) key name or property name
// let biodata = {
//     name : 'vishal',
//     age : 29,
//     getdata : function(){
//         console.log(`my name is ${biodata.name} and my age is ${biodata.age}`)
//     }
// }
// // call the perticular variable inside the object or get perticular propert of the object
// console.log(biodata.name);

// //  if you defined the function inside the object you need to call it.
// biodata.getdata();


// 2way no need to write function as well after es6.
// let biodata = {
//     name : 'vishal',
//     age : 29,
//     // getdata : function(){
//         //   here no need to wreit function keywored you can directely defined the function name.
//         getdata(){
//         console.log(`my name is ${biodata.name} and my age is ${biodata.age}`)
//     }
// }
// // call the perticular variable inside the object or get perticular propert of the object
// console.log(biodata.name);

// //  if you defined the function inside the object you need to call it.
// biodata.getdata();


// if you wnat an object as an value inside an object
// (i,e object inside the another object)

let biodata = {
    myFullName : {
        firstName: 'vishal',
        lastName: 'shinde'
    },
    myAge:25, 
    getData() {
        console.log(`my LastName is ${biodata.myFullName.lastName}`)
        // so you have to call object inise the ojbect by using above way...
    }
}
biodata.getData();



// example 5
// this object will not wore with arrow function because it refers to the window objects.
const obj ={
    myage:27,
    myName : () =>{
        console.log(this)
    }
}
obj.myName()