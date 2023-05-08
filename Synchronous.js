// // synchornous function 
// Synchronous is blocking architecture
// So the execution of each task or operation is dependent on the completion of the one before it.
// Task can be run serial
// I.e each instruction  wait for previous instruction to be complete its execution
// Due to nature of synchronous programming some time important instruction get blocked 
// due to some previous instruction which case dealy in user interface

const func2 = () => {
    console.log('function two is called')
}
const fnc1 = () =>{
    console.log('function 1 is called..');
    func2()
    console.log('function one is called..')
}
fnc1();
