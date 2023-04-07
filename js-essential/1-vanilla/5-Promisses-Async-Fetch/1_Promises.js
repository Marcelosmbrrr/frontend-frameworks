// Asynchronous JavaScript is a fairly advanced topic
// Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs
// Promises are the foundation of asynchronous programming in modern JavaScript
// A promise is an object returned by an asynchronous function, which represents the current state of the operation

function progression(aX) {

    return new Promise((resolve, reject) => {

        if (typeof aX === 'number') {

            // Sucessful resolution case
            // Returns .then() with a parameter
            resolve(aX);

        } else {

            // Fail resolution case
            // Returns .catch() with a parameter
            reject("The progression works only with numbers!");

        }

    });

}


let a1 = 0;
progression(a1)
    .then((a1) => {
        const a2 = a1 + 2;
        return a2;
    })
    .then((a2) => {
        const a3 = a2 + 2;
        return a3;
    })
    .then((a3) => {
        const a4 = a3 + 2;
        return a4;
    })
    .then((a4) => {
        return 'NaN';
    })
    .then((a5) => {
        console.log('This will not execute because the last then sent a NaN');
    })
    .catch((error) => {
        console.log(error);
    });