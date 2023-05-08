// callBack
// Callback hell is a phenomenon that happens when multiple callbacks are nested on top of each other. 
// The two common ways of escaping the callback heare are by using promises and async/awai

setTimeout(() => {
    console.log(' 1 work is done');
    setTimeout(() => {
        console.log(' 2 work is done');
        setTimeout(() => {
            console.log(' 3 work is done');
            setTimeout(() => {
                console.log(' 4 work is done');
            },1000);
        },1000);
    },1000);
    
},1000);