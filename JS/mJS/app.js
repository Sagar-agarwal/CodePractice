const posts = [
    {
        title: "Post one",
        body: "Post one body"
    },
    {
        title: "Post two",
        body: "Post two body"
    }
];

function createPost(post) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const input = {
                title: post.title,
                body: post.body
            };

            posts.push(input);

            let err = true;

            if (!err) {
                resolve();
            } else {
                reject("Error: this is a error");
            }
        }, 2000);
    });
}

function getPosts() {
    let output = "";

    setTimeout(function() {
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });

        document.querySelector(".container").innerHTML = output;
    }, 1000);
}

createPost({ title: "Post three", body: "Post three body" })
    .then(getPosts)
    .catch(function(err) {
        console.log(err);
    });
