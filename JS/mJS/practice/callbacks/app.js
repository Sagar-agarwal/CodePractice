const posts = [
    {'title': 'this is post one','body': 'this is body of post'},
    {'title': 'this is post two','body': 'this is body of post'}
];

// function createPost (post) {
//     setTimeout(function () {
//         posts.push(post);
//     }, 2000);
// };

// function getPosts (){
//     setTimeout(function (){
//         let output = '';
//         posts.forEach(function (e) {
//             output += `<li>${e.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// };

function createPost (post) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            posts.push(post);

            let err = true;

            if(!err){
                reject('ERROR: Something is wrong');
            }
            else{
                resolve();
            }
        }, 2000);
    });

    
};

function getPosts (){
    setTimeout(function (){
        let output = '';
        posts.forEach(function (e) {
            output += `<li>${e.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
};

post = {
    'title': 'this is post three',
    'body': 'this is posts body'
};

createPost(post)
    .then(getPosts)
    .catch(function (err){
        console.log(err);
    });