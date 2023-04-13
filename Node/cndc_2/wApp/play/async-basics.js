console.log('Starting app');

setTimeout(() => {
    console.log('inside setTimeout')
}, 2000);

setTimeout(() => {
    console.log('This is second timeOut');
}, 1000);

console.log('Finishing up');

// Call stack and event loop fundamentals complete