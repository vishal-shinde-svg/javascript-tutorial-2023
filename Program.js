// // 1. write a program to swap two number (using third variable)

// var num1 = 20;
// var num2 = 40;
// console.log(
//   `before swapping the value of  num 1 ${num1} and value of num2 ${num2}`
// );
// var temp;
// temp = num1;  //  temp = 20;
// num1 = num2;   // num1 = 40;
// num2 = temp;    // num2 = 20;
// console.log(
//   `after swapping the value of  num 1 ${num1} and value of num2 ${num2}`
// );

// 2. write a program to swap two numbers without using third variable...

var a = 20;
var b = 40;
console.log(`before swapping the value of a is ${a} and value of b ${b}`);
// a = a + b; // a= 20+40 -->60
// b = a - b; // b = 60 - 40 --> 20
// a = a - b; // 60 - 20 --> 40
// console.log(`after swapping the number value of a${a} and value of b ${b}`);
//  another way...
a = a * b;  // a=a*b--> 20*40 -->800
b = a / b;  // b=800/40-->20
a = a / b;  // 800/20 --> 40
console.log(
  `another way after swapping the number value of a${a} and value of b ${b}`
);


// write a program that work out weather if a given year is leap year or not
// leaf year having 366 day.(leaf year exactly divided by 4   also divided by 400
//  expect it divided by 100 then it is not leaf year)

var year = 2021;
if (year % 4 === 0 && year % 400 === 0) {

  if (year % 100 !== 0) {
    console.log('given year not leaf year......')
  }
  else {
    console.log('given year is leaf year')
  }
} else {
  console.log('given year is  not leaf year')
}

// javascript program to print table for given number (8,9,12,15) using for loop

var num = 8;
for (var i = 0; i <= 10; i++) {
  // console.log(`the table of 8 is ${num * i}  `)
  console.log('table of ' + "=" + num  + '=' + num * i )
}

