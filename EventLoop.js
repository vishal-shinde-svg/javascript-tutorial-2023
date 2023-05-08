// EventLoop :
// a single-threaded loop that watches the call stack and checks if there's any code 
// to run in the task queue. If the call stack is empty and there're callback functions in the task queue,
//  then they'll be dequeued from the task queue and run by pushing them to the call stack.
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