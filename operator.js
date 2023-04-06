// //  what is expression
// console.log(2 + 20);

// //* Assignment operator
// var x = 4;
// var y = 4;
// console.log("give value are equal or not" + x == y);
// // it return false because here we have to used + operator instead of that you have to used string literal
// console.log(`given value are equal or not :  ${x == y}`);

//* Arithmetic Operator :
// 1. addition (+)
// 2. Subtraction (-)
// 3. Multiplication (*)
// 4. Division ( /) --> return dividend.
// 5. Module(Reminder) (%) --> return reminder

//* Increment and Decrement Operator :
// 2 type of increment and Decrement Operator 1. PostFix (x++) or (x--)  2. PreFix (++x) or (--x);

//  //*  post incremented :
// // 1
// var num = 30;
// var num1 = num++;
// console.log(num); // it return 31
// console.log(num1); // it return 30;

// // 2.
// var no = 50;
// var no1 = no++ + 5;
// console.log(no1); // 55
// console.log(no); // 51

// //* preIncrement :
// // 1
// var num = 30;
// var num1 = ++num;
// console.log(num); // 31
// console.log(num1); // 31

// // 2.
// var no = 50;
// var no1 = ++no + 5;
// console.log(no1); // 56
// console.log(no); // 51

// //* Decrement
// // *postfix - Decrement :
// // 1
// var no = 50;
// var no1 = no-- + 5;
// console.log(no1); //55
// console.log(no); // 49

// // 2
// var num = 30;
// var num1 = num--;
// console.log(num); // 29
// console.log(num1); // 30

// *Decrement
// *prefix - Decrement :
// 1
// var no = 50;
// var no1 = --no + 5;
// console.log(no1); //54
// console.log(no); // 49

// // 2
// var num = 30;
// var num1 = --num;
// console.log(num); // 29
// console.log(num1); // 29

//   // * Comparison Operator
//1. equal-- > (==)
//2. Grater Then-- > ( > )
//3. Less Then-- > (< )
//4. Grater then or equal to-- > ( >=)
//5. less then or equal to --> (<=)
//6. not equal to --> (!=)

// Examples..

// var a = 20;
// var b = 10;
// console.log("is equal", a == b);
// console.log(`is grater theb ${a > b}`);
// console.log(`is less then ${a < b}`);
// console.log("is not equal ", a != b);
// console.log("is Grater then or equal ", a >= b);
// console.log("is less then or equal to ", a <= b);

//  // *Logical operator..
// return logical value
// type of logical value...
// 1. Logical AND (&&)
// 2. Logical OR (||)
// 3. Logical NOT (!)

// //1. * AND (&& )  --> called conjunction
//  T --> T = true
//  T --> F = False
//  F --> T = False
//  F --> F = False

// var a = 30;
// var b = -20;
// console.log(a > b); // true
// console.log(a > b && b < 0);

// // * Logical OR(||) operator :
// called ad logical disjunction
// it need if and only if one or more of its operand true
// T --> T = T
// T -->F = T
// F --> T = T
// F --> F = F

// var a = 30;
// var b = -20;
// console.log(a > b); // true
// console.log(a < b || b > 0);

//  // * Logical (!) not Operator :
// is called as Logical complement or Negation
// logical not operator Negation the value (true -- to --false or  false -- to true)

// var a = 30;
// var b = -20;
// console.log(!(a > 0) || b > 0);  // it return true but not operator used t negation so return false.

// // * string Operator
// //  + --> is called as concatenation operator (used to concatenates two string value together and returning another string that is union of two string.)
// console.log("Hello");
// console.log("Hello" + "word");
// var myName = 'vishal';
// console.log(myName + 'shinde');

// //* challenges..
// // 1. 3 power of of 3  ( ** --> called exponential operator ) --> 27
// console.log(3 ** 3);

// // 2.  1/10 -->0.01
// console.log(10 ** -1);

// // 3 what will be the output when we add number and string  --> 5vishal
// console.log(5 + 'vishal');

// // 4 what will be the output when we subtract string and number. // Nan --> not a number.
// console.log(5 - 'vishal')

// // * what is difference between ( == ) and (===)  operator

// // double equal (== ) --> check only value
// var num1 = 20;
// var num2 = 20;
// console.log("double equal sing type is same", num1 == num2);
// var num1 = 20;
// var num2 = "20";
// console.log("double equal sing type is different ", num1 == num2);

// triple equal (== ) --> check value as well as type of content.
var num1 = 20;
var num2 = 20;
console.log("triple equal sing type is same", num1 === num2);
var num1 = 20;
var num2 = "20";
console.log("triple equal sing type is different ", num1 === num2);
