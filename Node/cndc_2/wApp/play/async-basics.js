console.log('Starting app');

setTimeout(() => {
    console.log('inside setTimeout')
}, 2000);

setTimeout(() => {
    console.log('This is second timeOut');
}, 0);

console.log('Finishing up');