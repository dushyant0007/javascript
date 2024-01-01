console.log('Test start')
setTimeout(()=>console.log('0 sec timer'),0)

// build a promise that is immediately  resolved
Promise.resolve('resolved promise 1')
.then(res=>{
    console.log(res);
    for(let i = 0 ; i < 3000000000 ; i++){}
})

console.log('test end')

// the sequence of execution will look like

/*
Test start - line 1
test end - line last

//now that the call-stack is empty
resolved promise 1 - micro-task-queue (high priority)
0 sec timer - call-back-queue;
*/