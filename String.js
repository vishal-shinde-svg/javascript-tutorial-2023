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
// const bioData = 'hi i am vishal shinde at post junner';
// let lastIndex = bioData.lastIndexOf(('at'));
// console.log('lastIndex', lastIndex);

// // if not match return -1
// let lastIndex1 = bioData.lastIndexOf(('atm'));
// console.log('lastIndex', lastIndex1);



// // 6* The search method searches a string for specified value and return the position of the match
// const bioData = 'hi i am vishal shinde at post junner';
// const data = bioData.search('am');
// console.log('data', data)

// const notFound = bioData.search('ki');
// console.log('notfound', notFound);



// // 7 * slice () method
// //  extract the part of the string and return extracted part as new string
// // it having 2 argument start and end.
// const bioData = 'hi i am vishal shinde at post junnar';
// let newString = bioData.slice(2, 8); // you do not need to give end position it continue with whole string
// // it return  extraction part as new string.
// console.log('newString = ', newString); // it return  i am  because it does not contain end position in result
// // also splice method does not change the original array
// console.log('biodata', bioData);

// Ex in slice method you have to pass -ve number

// const bioData = 'hi i am vishal shinde at post junnar';
// let data = bioData.slice(6, -2);
// // if you pass end argument as negative it go throw the end of the string and subtract  the given end element of the string.
// console.log('data =', data);


// Q display only 280 characters of a string like the one used in twitter.

// let myTweet = "multiple string.....('give long length string.')   "
// console.log("myTweet", myTweet)
// let ActualLength = myTweet.slice(0, 280);  // if you include 0 it count accurate 280
// console.log('actualLength', ActualLength);



// 8*  subString() --> used to extract the part of string and return extracted part as new string
// subString does not accept negative value. if you give negative value it then the character counted from  0th position

// let str = "Apple, Banana, Kiwi, Mango "
// let res = str.substring(0, 4);
// console.log(res);  // It return appl because it exclude the last index element


// // 2
// let str = "Apple, Banana, Kiwi, Mango "
// // here you have to give negative index value so it count the 0th position.
// let res = str.substring(7, -2);
// console.log(res);


//  9* subStr() :extract the part of string for given location and 2nd argument return the length or the
// extracted part.
// let str = "apple, mango, banana, kiwi";
// let newStr = str.substr(7, 6); // it return the starting position 7 and the length of argument 6
// // (i.e it return only 6 character)
// console.log('newStr: ', newStr);


// if you have to add 2nd argument as negative in subStr() method it does not return anything.
// let str = "apple, mango, banana, kiwi";
// let newStr = str.substr(7, -4); // if you give 2nd argument as -ve index value it does not return anything
// console.log('newStr: ', newStr);

// if you want to extract data form back side so you have to used subStr() method as single -ve value index
// let str = "apple, mango, banana, kiwi";
// let newStr = str.substr(-4);  // if you give the -ve value as single argument it return the data from back side.
// console.log('newStr: ', newStr);



//  10* replace method
// replace specified value with another value in a string
// replace having 2 arguments first one is searchbar, and 2nd is replaceFor
// replace method work as casesensitive and it return only first match

// let FullName = "i am vishal shinde";
// let changeName = FullName.replace('vishal', 'vishu');
// console.log('changeName', changeName);


//  11* Extracting string characters

// There are three method to extracting characters...
// 1. charAt( position )
// 2. charCodeAt( position )
// 3. property access [].


// // charAt( position )
// // charAt method return the character at specified position in a string
// let str = "apple, mango, banana, kiwi"
// let newPosition = str.charAt(7);
// console.log('newPosition : ', newPosition);
// console.log('str : ', str)


// // charCodeAt( position )
// // charCodeAt() method return the uniCode of the  character at specified index position in a string
// let str = "apple, mango, banana, kiwi"
// let newPosition = str.charCodeAt(7);
// console.log('newPosition : ', newPosition);
// console.log('str : ', str)


// property access [] ;
// es5 (2000) allow property access on string.
// let str = 'Hello word';
// console.log(str[0]); // Here it is a array to access particular element
// in in es5 it allows to string for property access [ ] ;


// Other UseFull method

let str = 'Hello word';

// 1. toUpperCase():
// const str1 = str.toUpperCase();
// console.log('str1', str1);




// 2. toLowerCase() :
// const str1 = str.toLowerCase();
// console.log('str1', str1);

// 3. concat method
// concat method used to join two or more string

// let firstName = 'vishal'
// let lastName = 'shinde'
// let fullName = firstName.concat(lastName);
// console.log('fullName : ', fullName);


// 3. trim () method
// trim() method used to remove white spaces form both side.
// let string = '        Hello word     ';
// console.log('string ', string);
// console.log(string.length)
// console.log('newTrimString : ', string.trim());
// console.log(string.trim().length);


// Converting string into an array ?
// A String can be converted to an array with the split() method.
// 3 way to convert the string into the array...
// 1. split on commas (",");
// 2. split on space (" ");
// 3. split on pipe (" !");


// 1. split on commas (",");

// var text = "a, b , c, d, e, f";
// console.log('original string ', text);
// console.log(text.split(','));


// 2. split on space (" ");
// var text = "a, b , c, d, e, f";
// console.log('original string ', text);
// console.log('split on space ', text.split(' '));

// // 3. split on pipe(" !");
// var text = "a, | , b , | , c, d, |,  e, f";
// console.log('original string ', text);
// console.log('split on space ', text.split('|'));


// if you used space separator operator  like split(" ") it return string in word format.

// var string = "swagat, vishal, sudarshann, ganesh, ram ";
// console.log('Original string', string);
// let newArray = string.split(" ");
// console.log('newArray', newArray);












