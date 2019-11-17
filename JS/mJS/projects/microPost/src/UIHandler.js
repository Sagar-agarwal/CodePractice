class UIHandler{

    addPost (post){
        var postContainer = document.querySelector('#posts');
        var htmlPost = this.constructPost(post);
        postContainer.insertAdjacentElement('beforeEnd', htmlPost);
    }

    constructPost (post){
        var div = document.createElement('div');
        div.classList.add('card', 'card-body', 'mb-3');
        div.innerHTML = `<h1>${post.title}</h1>
        <p class="lead">${post.body}</p>`;

        return div;
    }

    clearForm (){
        document.querySelector('#title').value = '';
        document.querySelector('#body').value = '';
    }

};

export const UI = new UIHandler();