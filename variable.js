// // var --> function scope

// var name = 'vishal'
// console.log('name', name);
// var name = 'shinde';
// console.log('name', name);

// // Ex.
// function biodata() {
//     var myFirstName = 'vishal'; //defined inside function
//     console.log('myFirstName', myFirstName)
//     if (true) {
//         var myLastName = 'shinde'; // defined inside the block
//         console.log('myFirstName', myFirstName);
//         console.log('myLastName', myLastName);
//     }
//     console.log('myLastName', myLastName); // defined outside block so
//     // if you defined variable with var keyword you access anywhere in the function.
// } biodata();


// let (block scope)
// you have to declare once in the scop but not redeclare but you can update the value
// let name = 'vishal'
// console.log('name', name);
//  name = 'shinde'
// console.log('name', name);


// function biodata()
// {
//     let myName = 'vishal'
//     console.log('myName', myName);
//     if (true) {
//         let myLastName = 'shinde';
//         console.log('myName', myName); // having scope
//         console.log('myLastName', myLastName);
//     }
//     console.log('LastNmae', myLastName); //it show error because let having block scope
// }biodata()

// const
// const myName = 'vishal';
// console.log('myName', myName);
// const myName = 'shinde';
// console.log('myName', myName);

function biodata() {
    const Myname = 'vishal'
    console.log('myName', Myname);

    if (true) {
        const lastName = 'shinde';
        console.log('lastName', lastName);
        console.log('myNmae', Myname);
    }
    console.log('LastName', lastName); // show error last name is not defined because it having block scope,

} biodata();
