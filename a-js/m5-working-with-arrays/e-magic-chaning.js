// How do we debug code that is in the pipeline:

// Suppose we have the following requirement:
// filter out all the -ve values
// convert values to usd
// calculate the sum
values = [200, -200, 340, -300, -20, 50, 400, -460];

const finalSum = values.filter(amt => amt > 0)
    .map(amt => amt * 1.2)
    .reduce((sum, amt) => sum + amt, 0);

console.log(finalSum);

// But now if there was an error, how would we debug?
// This is where the use case of passing the original array as an args comes in
// We can rewrite the original function as:
const finalSumDebug = values
    .filter((amt, _, arr) => {
        console.log(`Inside filter the input array is: ${arr}`);
        return amt > 0;
    })
    .map((amt, _, arr) => {
        console.log(`Inside map the input array is: ${arr}`);
        return amt * 1.2
    })
    .reduce((sum, amt, _, arr) => {
        console.log(`Inside reduce the input array is: ${arr}`);
        return sum + amt
    }, 0);

/*
The important point to note here is that on each step of the pipeline,
the array that is being passed into the next stage, is the one that was generated after the previous stage.
In this way, we can keep track of how the arrays are being modified by each step of the pipeline
Inside filter the input array is: 200,-200,340,-300,-20,50,400,-460
Inside filter the input array is: 200,-200,340,-300,-20,50,400,-460
Inside filter the input array is: 200,-200,340,-300,-20,50,400,-460
Inside filter the input array is: 200,-200,340,-300,-20,50,400,-460
Inside filter the input array is: 200,-200,340,-300,-20,50,400,-460
Inside filter the input array is: 200,-200,340,-300,-20,50,400,-460
Inside filter the input array is: 200,-200,340,-300,-20,50,400,-460
Inside filter the input array is: 200,-200,340,-300,-20,50,400,-460
Inside map the input array is: 200,340,50,400
Inside map the input array is: 200,340,50,400
Inside map the input array is: 200,340,50,400
Inside map the input array is: 200,340,50,400
Inside reduce the input array is: 240,408,60,480
Inside reduce the input array is: 240,408,60,480
Inside reduce the input array is: 240,408,60,480
 */