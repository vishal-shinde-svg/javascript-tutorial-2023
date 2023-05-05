// flat() method used to flattern an array i.e you have to convert multidimention array
// into single dimentional array.

// const arr = ['dog',['shif',['wolf']]]
// console.log(arr.flat());
// // if you want flatten an array o array you pass argument to flat () method.
// console.log(arr.flat(2));
// // if you want flat infinity level so you pass infinity as argument
// console.log(arr.flat(Infinity));



// //  ojbect.fromEntries() 
// // object.entries() 
// // this metho return an array containing all the objects data .
// const  person1 = {
//     name:'vishal',
//     age:20
// }
// let result =Object.entries(person1)
// console.log('result', Object.fromEntries(result));
// this return array or array into origional object



// string.prototype.{trimStart, trimEnd}
// remove the whitespaces form fornt and back form the given string

const str = "             vishal shinde";
console.log(str.trimStart());
const str1 = "vishal shinde                 ";
console.log(str1.trimEnd());
