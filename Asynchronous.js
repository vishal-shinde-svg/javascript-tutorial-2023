// Asynchronous function
// Asynchronous is non-blocking architecture 
// So the execution of the one task does not dependent on another
// Task can run simultaneously
// Asynchronous code execution allow to execution next instruction immediately and does not block the flow because of previous instruction
const fun2 = () =>{
    setTimeout (() =>{
        console.log('function 2 called..')
    })
}
const fun1 = () =>{
    console.log('function 1 called..');
    fun2()
    console.log('function 1 called..')
}
fun1()