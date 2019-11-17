import {
    http
} from "./http";
import {
    UI
} from "./UIHandler";


document.addEventListener('DOMContentLoaded', getPosts);
document.querySelector('.post-button').addEventListener('click', addNewPost);


function getPosts() {
    http.get('http://localhost:3000/posts')
        .then(data => data.forEach(post => UI.addPost(post)))
        .catch(err => console.log(err));

};

function addNewPost(e) {
    var title = document.querySelector('#title').value;
    var body = document.querySelector('#body').value;
    http.post(
            'http://localhost:3000', {
                "title": title,
                "body": body,
                "id": 1
            })
        .then()
        .catch(err => console.log(err));

    UI.clearForm();

    e.preventDefault();
}