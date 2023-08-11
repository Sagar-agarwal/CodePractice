let dir = {};
dir.user1 = {
    phone: 1,
    street: 'abc',
    city: 'London',
    country: 'UK',
};
var user1 = {
    name: 'Jack',
    posts: [
        { id: 1, data: 'post1' },
        { id: 2, data: 'post' },
    ],
    hashes: [1, 2, 3, 4, 5, 6],
};
function printAll(strs) {
    if (typeof strs === 'object') {
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (typeof strs === 'string') {
        console.log(strs);
    }
    else {
    }
}
