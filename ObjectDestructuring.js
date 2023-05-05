// destructuring is assisment syntax in javascript expression that make it possible to unpack value or properties 
// from the objects in distinct variable 

// object Destructuring :
// const mybiodata = {
//     myName : 'vishal',
//     myLastName :'shinde',
//     myAge :'27'
// }
// // to access the perticular property of the object you have access followig way
// let age = mybiodata.myAge;
// console.log('age',age);


// // way to object destructuring 
// let{myName,myLastName,myAge,myDegree='Be'} = mybiodata;
// console.log(myName);
// console.log(myLastName);
// console.log(myAge);
// // also you have to add new key and value in object
// console.log(myDegree);



// Object Properties :
// we can now used Dynamic properties.
// let myname = 'vishal'
// const mybio = {
//     [myname] : 'hello how are you ?',
//     // you have to write this way 
//     [20 +6] :'this is my age' 
//     // but you can not wriet following way it show error 
//      // 20 + 4 : ' this is my age'
//     // but using dynamic way like using [] you have to access
//     // this dynamic proptery in object  like   [20 +6] :'this is my age' 
//   }
// console.log('mybio', mybio);



// No need to write key and value if the key and value are same
let myName ='vishal'
let myAge = 27
// way to defined same name of key and value
// const myBio = {
//     myName : myName,
//     myAge :myAge
// }

// so no need to defind only key name if you have same name key and value
const myBio1 = {
    myName,myAge
}
console.log('myName', myName);
console.log('myAge',myAge);
