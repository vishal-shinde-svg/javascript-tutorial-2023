// javascript Date object represent a single moment in time in a platform-independent millisecond since 1 january 1970 UTC
// There are 4 way to create a new date


//  Date Object are created with the new Date constructor
// 1. new Date();
// let currentDate = new Date();
// console.log('currentDate: ', currentDate);

// console.log(new Date());  //Tue Apr 18 2023 07:21:23 GMT+0530 (India Standard Time)
// // toLocalString() method convert data and time into string by using current or specified locale
// console.log(new Date().toLocaleString()); // 4/18/2023, 7:21:38 AM
// // return a string representation of date the format of the string depends on local
// console.log(new Date().toString()); //Tue Apr 18 2023 07:21:55 GMT+0530 (India Standard Time)


//  Date.now()
// return the numeric value corresponding to the time-the number of millisecond elapsed since january 1,1970
// console.log(Date.now());


// new Date(year,month, day, hour,minuit, second, millisecond)
// in javascript count month from o 11.
//  january is 0 and December is 11.

// var d = new Date(2018, 11, 24, 10, 33, 30, 0);
// console.log('date is', d.toLocaleString());

// if you pass any argument so you need to defined the month argument compulsory. if you not pass any month argument it contain by default value like 1/1/1970

// var d = new Date(2023, 3)
// console.log('current Date', d.toLocaleString());


// new Date(dateString);
// new Date(dateString ) create new date object form a date string

// var d = new Date("October 13, 2014  11:13:00")
// console.log(d);


// new Date(millisecond) // month filed is need other it give 1.1.1970 date.
// new Date(millisecond) creates a new date objects as zero time plus millisecond
// var date = new Date(0); it display 1/11970 5:30:00
// console.log('date', date.toLocaleString());


// Method of Dates
// const currentDate = new Date();
// console.log('currentDate: ', currentDate);

// // how to get individual date();

// // 1.
// console.log('', currentDate.toLocaleString());

// // 2.
// console.log('', currentDate.getFullYear());

// // 3.
// console.log('', currentDate.getMonth());


// // 4.
// console.log('', currentDate.getDate());

// //5
// console.log('', currentDate.getDay());


// // * set individual date

// const currentDate = new Date();
// // setFullyear() method are optionally set month and day
// console.log(currentDate.setFullYear(2022));

// console.log(currentDate.setFullYear(2022, 10, 5));

// let setMonth = currentDate.setMonth(10);
// console.log('setmonth', setMonth);

// console.log(currentDate.setDate(5));

// console.log(currentDate.toLocaleString());



// Time method :
//  how to get individual time

// const curTime = new Date();
// // getTime() method return the number of milliseconds since 1 jan 1970;
// console.log(curTime.getTime());

// // get hours method return the hours of a date as a number (0-23)
// console.log(curTime.getHours());

// // getMinutes() method return the current minutes
// console.log(curTime.getMinutes());

// // return current second
// console.log(curTime.getSeconds());

// // return current millisecond
// console.log(curTime.getMilliseconds());


// set individual time


// const curTime = new Date();
// //all  method return the number of milliseconds since 1 jan 1970;


// console.log(curTime.setHours(5));


// console.log(curTime.setMinutes(5));


// console.log(curTime.setSeconds(5));


// console.log(curTime.setMilliseconds(5));

// practices time :

//How to get only current date.
new Date().toLocaleTimeString();

// how to get only current time.
new Date().toLocaleDateString();

// how to get date and time();

new Date().toLocaleString();



