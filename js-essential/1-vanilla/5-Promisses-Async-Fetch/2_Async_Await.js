// The async keyword gives you a simpler way to work with asynchronous promise-based code
// Adding async at the start of a function makes it an async function

function progression(aX) {

    return new Promise((resolve, reject) => {

        if (typeof aX === 'number') {

            // Sucessful resolution case
            // Returns .then() with a parameter
            resolve(aX + 2);

        } else {

            // Fail resolution case
            // Returns .catch() with a parameter
            reject("The progression works only with numbers!");

        }

    });

}

async function executeProgression() {

    try {

        const a1 = 0;
        const a2 = await progression(a1);
        const a3 = await progression(a2);
        const a4 = await progression(a3);
        const a5 = await progression('NaN');

    } catch (error) {
        console.log(error);
    }

}

executeProgression();

