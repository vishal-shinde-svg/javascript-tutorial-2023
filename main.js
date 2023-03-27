// // perform operation on console..

// // 1.
// alert("Hello");

// // 2.
// console.log("Hello..");

// //3. what is differences between null and undefined.

// // you defined variable but not assigned a value called as undefined
// var myName;
// console.log("myName", myName);
// console.log("undefined type  " + typeof myName);

// // you defined variable and assigned a value as Null.
// var myName = null;
// console.log("myName", myName);
// console.log("null type " + typeof myName);

// //4. what is Nan
// //1.  Not-a-Number.
// var myNo = 1234567890;
// var myAdd = "pune";
// console.log("subtraction is" + myNo - myAdd);

// // 2.
// var myName = "vishal";
// var myName1 = "shinde";
// console.log("output is" + myName - myName1);
// // 3.
// var myNo = 12345678;
// var name = "abc";
// console.log(isNaN(myNo)); // false it check is not a number
// console.log(isNaN(name)); // true it check it is not number return true because it is a not a number.

// NAN number challenges.
console.log(NaN === NaN); // false
console.log(Number.NaN === NaN); // false
console.log(isNaN(NaN));  // true
console.log(isNaN (Number.NaN)) // true