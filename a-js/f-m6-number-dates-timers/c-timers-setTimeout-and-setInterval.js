
//- Set Timeout - just run once after a defined time
//- Set Interval - keeps running forever until we stop it


//the code execution does not stop here at this point
setTimeout(()=>{console.log('Here is you pizza ')},3000);
console.log('Waiting...')


//To pass arguments in the call back function - can be passed after the delay
const timer2 = setTimeout((arg1,argn)=>{console.log('Here is you pizza ',arg1,argn)},3000,'the-args','arg-n');
if(1)
    clearTimeout(timer2) // cancelling timer2 



let x = 1;
const i = setInterval(()=>{console.log(`${x++}`)},1000);

if(1)
    clearImmediate(i);