document.querySelector("#button-text").addEventListener("click", getText);
document.querySelector("#button-json").addEventListener("click", getJSON);
document.querySelector("#button-api").addEventListener("click", getApi);

// Get local text file data
function getText(e) {
    fetch("text.txt")
        .then(function(res) {
            return res.text();
        })
        .then(function(data) {
            document.querySelector("#output").innerHTML = data;
        })
        .catch(function(err) {
            console.log(err);
        });

    e.preventDefault();
}

// Get local JSON file data
function getJSON(e) {
    fetch("posts.json")
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            let output = "";
            data.forEach(function(ele) {
                output += `<li>${ele.title} : ${ele.body}</li>`;
            });
            document.querySelector("#output").innerHTML = output;
        })
        .catch(function(err) {
            console.log(err);
        });

    e.preventDefault();
}

// Get local API file data
function getApi(e) {
    fetch("https://api.github.com/users")
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            let output = "";
            data.forEach(function(ele) {
                output += `<li>${ele.login} : ${ele.id}</li>`;
            });
            document.querySelector("#output").innerHTML = output;
        })
        .catch(function(err) {
            console.log(err);
        });

    e.preventDefault();
}
