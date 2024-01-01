

const lotteryPromise = new Promise(function(resolve,reject){
    //executer function

    if(Math.random() >= 0.5)
        // mark this promise as a fulfilled promise
        // into the resolve function, we pass the fulfilled value of the promise
        // so it can later be consumed with then method
        resolve('You Win') 
    
    else
        reject('you lost')
})

lotteryPromise.then(
    res => {console.log(res)}, 
    rej => {console.log(rej)}
)


////////////////////////////////////////////////////////////////////

// Practice 

const wait = function(sec){
    return new Promise(function(resolve){
        setTimeout(()=>{resolve()}, sec*1000);
    })
}
wait(2).then(()=> {
    console.log('Waited for 2 secs')
    return wait(1)
}).then(()=> console.log('waited for 1 sec'));


////////////////////////////////////////////////////////////////////

//creating fulfilled / rejected promise immediately

Promise.resolve('resolve-value').then(x=>console.log(x))
Promise.reject('reject-value').then(()=>{},x=>console.log(x))