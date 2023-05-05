// es8 having different feature 
// 1.string.paddinng
// 2.object .values()
// 3.object.entries();

// 1 string padding --> i.e 
// if you want to add white spaces in string so you have to used string.padding
// padding having 2 method 1: padStart() and 2: padEnd()

// const myName = "vishal"
// console.log(myName.padStart(6));
// console.log(myName.padStart(20));

// const num = "20";
// console.log(num.padEnd(10));



// in Es8  object having 2 method 
// 1. Object.values();
// 2. object.entries();

// object.values()
//  This method return an array containing all the object own property value.
const  person = {
    name:'vishal',
    age:20
}
console.log(Object.values(person));


// object.entries() 
// this metho return an array containing all the objects data .
const  person1 = {
    name:'vishal',
    age:20
}
console.log(Object.entries(person1));