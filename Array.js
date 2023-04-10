// // array is collection of multiple type of data stored in single variable with help of square bracket
// // *1
// // create array following way
// //                0    1    2    3    4    5
// var myFriends = ['A', 'B', 'C', 'D', 'E', 'F']
// //                -6  -5   -4    -3   -2   -1
// // myFriends is name of array and in square bracket element of array.
// // index start from 0

// // 2* Another way to create array
// var myFriends = new Array;  // optional
// // so create instances of array call and put value on that
// myFriends = ['A', 'B', 'C', 'D', 'E', 'F'];
// console.log(myFriends)

// // 3* Traversal an array
// // How to get single data at a time
// var demo = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea'];
// console.log(demo);
// console.log(demo[0]);  // get 0the position element
// console.log(demo[0] = 'white Sea'); // this is a way to change or replace data in array.
// console.log(demo);

// // 4* How to find out the length of the array ?

// var demo = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea', 'white Sea'];
// console.log('Length of the array :', demo.length);

// // 5* How to find out last element of the array :
// var demo = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea', 'white Sea'];
// console.log('last Element of the array :', demo[demo.length - 1]);

// // 6* Navigate the array using for loop (iterate the array)
// // first iterate using Normal for loop :
// var demo = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea', 'white Sea'];
// for (var i = 0; i < demo.length; i++) {
//     console.log(demo[i])
// }

// // 7* iterate by using for in loop
// // it return index number (or index value);
// var demo = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea', 'white Sea'];
// for (let element in demo) {
//     console.log('The Given element index  in Array', element);
// }

// // 8* iterate using for of loop
// var demo = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea', 'white Sea'];
// for (let ele of demo) {
//     console.log('element of the arra is ', ele);
// }


// 9* forEach() Method;
// used to iterate the element of and array and call a function for each and every element of the array
// not return new array
// it return undefined.
// it change original array with resulting value (i.e forEach method are mutated)
// froEach method having the callback function with 4 argument like below
// var demo = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea', 'white Sea'];
// // 1. element 2. index ,3. current array 4. this argument (most of the time only used first three argument)
// const data = demo.forEach(function (element, index, array) {
//     console.log('element of the array', element); //return element
//     console.log('index of each element', index)     // return index of each and every element
//     console.log('the current array of the element.', array)  //this third array return in which array we have to deal
//     // and return its element.
// })
// console.log('for each method return undefined ', data);

// // 10* arrow function with forEach method
// const data1 = demo.forEach((element, index, array) => {
//     console.log(element, "+", index, "+ ", array);
// })


// 11* searching method.                i.e start searching from given index no.
// array.prototype.indexOf( element , index )
//                     - find out first (least) matching element index ,
// it return first least element index.

// var demo = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea', 'white Sea'];
// const data = demo.indexOf('white Sea');
// const data1 = demo.indexOf('vishal');
// console.log('index of return first matching element index : ', data)
// console.log('if indexof method search element not found it return ', data1);

// indexOf show only first matching element in the given array (if 2 same element in array but it return index only first match element
//  from give index position);

// var demo = ['Black Sea', 'Caribbean Sea', 'vishal', 'North Sea', 'Baltic Sea', 'Red Sea', 'white Sea', 'vishal'];
// const data = demo.indexOf('vishal', 4); // 2nd argument start searching from given index number.
// console.log('index of return first matching element index : ', data)


// // 12* LastindexOf()
// // return greatest (last) element index of an element of an array equal to the element
// // if not found return -1
// var demo = ['Black Sea', 'Caribbean Sea', 'vishal', 'North Sea', 'vishal', 'Baltic Sea', 'Red Sea', 'white Sea'];
// const data = demo.lastIndexOf('vishal'); // 2nd argument start searching from given index number.
// console.log('index of return first matching element index : ', data)

// // also pass 2nd argument it stat the searching from given index to in backward direction
// var demo = ['Black Sea', 'Caribbean Sea', 'vishal', 'North Sea', 'vishal', 'Baltic Sea', 'Red Sea', 'white Sea'];
// const data1 = demo.lastIndexOf('vishal', 3);
// const data2 = demo.lastIndexOf('vishal', 1);// 2nd argument start searching from given index number.
// console.log('if not found element return :', data2)
// console.log('index of return first matching element index : ', data1)


// // 13* include method (it determine weather the array contain a value or not and return based on that true of false)
// var demo = ['Black Sea', 'Caribbean Sea', 'vishal', 'North Sea', 'vishal', 'Baltic Sea', 'Red Sea', 'white Sea'];
// const data = demo.includes("vishal",4); // if you pass 2nd argument is start searching from that index number
// const data1 = demo.includes("shinde" ,1);
// console.log('include method return true or false based on array contain value or not', data);
// console.log('include method return true or false based on array contain value or not', data1);


//14*  find method (it return only one satisfied element in the given function execution);
// if not found element it return undefined.
// it also having callback function .with 4 argument
// var demo = [10, 20, 33, 45, 98, 100, 78, 01, 300, 200, 88, 48];
// demo.find(function (element, index, arr) {
//     console.log('return element', element);
//     console.log('return index number ', index);
//     console.log('current array', arr);

// })

// Ex2*
// var demo = [10, 20, 33, 45, 98, 100, 78, 01, 300, 200, 88, 48];
// const data = demo.find((element, index, arr) => {
//     return index > 8;

// })
// console.log(data);
// // it return only 100 because find() method return only one occurrences of the matching return of function condition
// // so instead of returning multiple value it return 100 as first matching value.

// ex3.
// //  in find method if the element is not found it return undefined
// var demo = [10, 20, 33, 45, 98, 100, 78, 01, 300, 200, 88, 48];
// const data = demo.find((element, index, arr) => {
//     return element > 1000;
// })
// console.log(data);



// 15*

// findIndex method(it return only one satisfied element index  in the given function execution);
// if not found element it return -1.
// it also having callback function .with 4 argument
// var demo = [10, 20, 33, 45, 98, 100, 78, 01, 300, 200, 88, 48];
// demo.findIndex(function (element, index, arr) {
//     console.log('return element', element);
//     console.log('return index number ', index);
//     console.log('current array', arr);

// })

// Ex2*
// var demo = [10, 20, 33, 45, 98, 100, 78, 01, 300, 200, 88, 48];
// const data = demo.findIndex((element, index, arr) => {
//     return element < 8;

// })
// console.log(data);
// it return only 01 because find()index method return only one occurrences of the matching return of function condition
// so instead of returning multiple value it return 01 as first matching index.


//  16 *  array filter() method
//  return new array containing all the element of the calling array for which the provided filtering function return true
// also it does not modify original array
// filer function having callback function.

// var demo = [10, 20, 33, 45, 98, 100, 78, 01, 300, 200, 88, 48];
// const data = demo.filter(function (ele, index, arr) {
//     console.log('element', ele);
//     console.log(index);
//     console.log(arr)
// })
// console.log(data)

// ex .
// var demo = [10, 20, 33, 45, 98, 100, 78, 01, 300, 200, 88, 48];
// const data = demo.filter((element, index, arr) => {
//     return element > 20
// })
// console.log(data);


// Ex.
// if filter method condition is not satisfied it return empty array..

// var demo = [10, 20, 33, 45, 98, 100, 78, 01, 300, 200, 88, 48];
// const data = demo.filter((ele) => {
//     return ele >= 1000;
// })
// console.log('if condition not satisfied in fulter methe it return :', data);


// // 17* sort () method --> sort the element of an array in place return sorting array.
// // the default sorting order is ascending
// var Month = ['march', 'jan', 'feb', 'dec', 'nov'];
// console.log(Month.sort())

// // Ex :
// var demo = [10, 20, 33, 45, 98, 100, 78, 01, 300, 200, 88, 48];
// console.log(demo.sort());



// //18 *  push method() --> add one or more element at the end or the array
// // it return only length or the new array
// var demo = [10, 20, 33, 45, 98, 100, 78, 01, 300, 200, 88, 48];
// console.log('length of the demo array', demo.length)
// const data = demo.push(10, 30);

// console.log('push method return only length of newly added element in the array ', data);


// ex. push method add more then one element at time in array at the end of the array
// var demo = [10, 20, 33, 45, 98, 100, 78, 01, 300, 200, 88, 48];
// console.log('length of the demo array', demo.length)
//  const data = demo.push('vishal', 'shinde');

// console.log('push method return only length of newly added element in the array ', data);
// console.log('the given data is ', demo);


// 19* unshift () --> add one or more element at beginning of the array
// //  unShift method only return new array element length
// var demo = [10, 20, 33, 45, 98, 100, 78, 01, 300, 200, 88, 48];
// console.log('length of the demo array', demo.length)
// const data = demo.unshift('vishal', 'shinde', 'a', 2000);

// console.log('unshift method return only length of newly added element in the array ', data);
// console.log('the given data is ', demo);


// 20* pop () method remove the last element of an array
//  pop method return the remove element of an array
//  also it change the length of the original array
// var demo = [10, 20, 33, 45, 98, 100, 78, 01, 300, 200, 88, 48];


// // if the array is empty it return undefined and not modified the original array
// var demo = []
// console.log('length of the demo array', demo.length)
// const data = demo.pop();

// console.log('pop method return only the remove element of an array  ', data);
// console.log('the given data is ', demo);


// 21* shift() method remove the first element of an array
// it return the remove element of an array.
// also it change the length of the original array
// var demo = [10, 20, 33, 45, 98, 100, 78, 01, 300, 200, 88, 48];

// var demo = []
// console.log('length of the demo array', demo.length)
// const data = demo.shift();

// console.log('shift method return only remove first element of an array  ', data);
// console.log('the given data is ', demo);



// 22* splice method used to add remove update and delete the element in the array
// add and remove the element from an array..

// const month = ['jan', 'feb', 'march', 'june', 'july', 'aug']

// // Q1  add dec at the end of the array
// const newMonth = month.splice(2, 2);
// // splice method contain three argument where first argument is index number where you have to start deleting and adding the element
// // seconde argument in deleting count (How many element you have to delete)
// // third argument is which element you have to add in array
// console.log('month', month); // here return array containing result as per splice method condition
// console.log('newMonth', newMonth);  // splice method here return empty array where you add element into array


//  Ex 2 *
// const month = ['jan', 'feb', 'march', 'june', 'july', 'aug']
// const newMonth = month.splice(2, 2);
// // splice method contain three argument where first argument is index number where you have to start deleting and adding the element
// // seconde argument in deleting count (How many element you have to delete)
// // third argument is which element you have to add in array
// console.log('month return remaining array element', month); // here return array containing result as per splice method condition
// console.log('newMonth return only deleted element', newMonth);  // splice method here return empty array where you does not delete any element

// // delete method most of the time used for delete element purpose
// // when you does not delete any element it return an empty array [];
// // if you delete any element form an array using splice method it return inside the array only deleted element.



// //Ex,2 Update march as March
// const month = ['jan', 'feb', 'march', 'june', 'july', 'aug']
// const indexof = month.indexOf('march');
// console.log('index of', indexof);
// if (indexof != -1) {
//     const updateMonth = month.splice(indexof, 1, 'March');
//     console.log('updateMonth');
// }
// console.log('Month', month);


// //Ex 3* delete june from array
// const month = ['jan', 'feb', 'march', 'june', 'july', 'aug']
// const indexof = month.indexOf('june');
// console.log('indexOf', indexof);
// if (indexof != 1) {
//     const deletedElement = month.splice(indexof, 1);
//     console.log("deletedElement", deletedElement
//     )
// }
// console.log('month', month);


// // Ex 4*
// const month = ['jan', 'feb', 'march', 'june', 'july', 'aug']
// const deleteAll = month.indexOf('march');
// console.log('deleteAll i.e index of march ') // start form deleting
// if (deleteAll != -1) {
//     const deleteallData = month.splice(deleteAll, Infinity);
//     console.log('deletatall data', deleteallData);
// }
// console.log('month', month);


//  24* map function ()
// return element of new array after executing something
// it contain callback function
// return new array containing result of calling array
// also return new array without changing original array

// const array = [1, 4, 5, 3, 8, 9, 33, 0, 6];
// // here we have to return data which is grater then 9;
// const data = array.map((element, index, arr) => {
//     return element > 9;

// })
// console.log('data', data);
// console.log('array original array', array);

