// A thread is a sequence of instructions that a program follows, because the program consists of a single thread, it can only do one thing at a time
// Workers give you the ability to run some tasks in a different thread, so you can start the task, then continue with other processing
// With multithreaded code, you never know when your thread will be suspended and the other thread will get a chance to run, so if both threads have access to the same variables, it's possible for a variable to change unexpectedly at any time
// To avoid these problems on the web, your main code and your worker code never get direct access to each other's variables, and they do not have access to the DOM


// There are three files in this directory: index.html, main.js and generate.js

// ==== MAIN.JS ==== //

// Create a new worker, giving it the code in "generate.js"
const worker = new Worker('./workers/generate.js');

// When the event occurs the worker is activated
// The message command is "generate", and the message also contains other data
document.querySelector('#gbutton').addEventListener('click', () => {
    worker.postMessage({
        command: 'generate',
        user: {
            id: 2,
            name: 'Fulano',
            sex: 'male'
        }
    });
});

// When the worker sends a message back to the main thread
worker.addEventListener('message', (response) => {
    // Response processing...
    console.log(response.data.message)
});

// ==== GENERATE.JS ==== //

// Listen for messages from the main thread.
// If the message command is "generate", call `generatePrimes()`
addEventListener("message", (message) => {
    if (message.data.command === 'generate') {
        // Processing...

        // When it have finished, send a message to the main thread
        postMessage({ message: 'This is the worker response!' });
    }
});

