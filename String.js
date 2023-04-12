// string --> sequences of character
// string are defined in following way

// // 1* way to defined variable and store the string
// let myName = 'vishal';
// let LastName = 'shinde';

// // string created as primitive, from string literals or as object using String() constructor

// let fullName = new String('vishal shinde'); // most of the time is not used
// // it return the value as array of string. as objects;
// console.log('fullName', fullName);
// console.log('myName', myName);
// console.log('LastName', LastName);

// // 2* how to find the length of the string
// let name = 'vishal shinde';
// const stringLength = name.length;
// console.log('stirngLength', stringLength);

// // if you want to write sentences inside that sentence you have to single or double quotes in sentence.
// let newSentence = "Hi i am 'vishal shinde' form junnar";
// console.log('newSentence', newSentence);


// // 3* used inside the double quotes inside the double quotes so you have to used Escape character

// let string = "hey , hi, how are you ? \" i am fine and you \" ";
// console.log(string)



// 4* Finding string inside string
// indexOf() --> return the position of the first occurrences of the substring
// const bioData = 'hi i am vishal shinde at post junner';
// const indexOf = bioData.indexOf('am');
// console.log(indexOf);

// 5* lastindexOf() -->
// lastIndexOf() return the  index within the calling String object of the last occurrences of searchElement ,
//  if not found it return -1;
const bioData = 'hi i am vishal shinde at post junner';
let lastIndex = bioData.lastIndexOf(('at'));
console.log('lastIndex', lastIndex);

// if not match return -1
let lastIndex1 = bioData.lastIndexOf(('atm'));
console.log('lastIndex', lastIndex1);





