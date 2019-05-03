async function myFunc() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("hello"), 3000);
    });

    const res = await promise;
    return res;
}

myFunc()
    .then(res => console.log(res))
    .catch(err => console.log(err));
