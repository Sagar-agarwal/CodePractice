var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Sagar'
    };

    setTimeout(() => {
        callback(user);
    }, 3000);
};

// function call
getUser(31, (userObj) => {
    console.log(userObj);
});