// a javascript spread operator (...) allow us to quickely copy all part of and existing array
// or object into another array or object.

// const color = ['red','green','blue','white'];
// const newcolor = ['red','green','blue','white','yello', 'black'];
// // second time add one more color on the top and tell we need to write it agian
// // on mycolor array to.
// const myFavColor = [...color, 'yello','black'];
// console.log('myFavColor',myFavColor)


//  spread oprator also work with objets 
// combine two dirrerent object (copy one object into another objects.)

const veical = {
    brand:'ford',
    model:'mustag',
    color:'red'
}
const feature = {
    year:2021,
    type:'car',
    color:'yellow'
}
const updatedveical = {
    ...veical,...feature
}
console.log('updatedveical',updatedveical)