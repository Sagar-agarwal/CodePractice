const getJokes = document.querySelector('#get-jokes').addEventListener('click', loadJokes);

function getCard (joke) {
    const divRow = document.createElement('div');
    divRow.className = 'row';
    const card = `
        <div class="col s12 m12">
            <div class="card blue-grey darken-1 hoverable">
                <div class="card-content white-text">
                    
                    <p>${joke.joke}</p>
                </div>
            </div>
        </div>
    `;
    
    divRow.innerHTML = card
    return divRow;
};

function getJokeCollection (jokesArray){
    const div = document.createElement('div');
    
    jokesArray.forEach(function(joke){
        div.appendChild(getCard(joke));
    });

    return div;
};

function loadJokes (e){
    const number = document.querySelector('#number');
    

    const xhr = new XMLHttpRequest();

    let method = 'GET';
    let url = 'http://api.icndb.com/jokes/random/' + number.value;
    let async = true;

    xhr.open(method, url, async);

    xhr.onload = function () {
        
        if (this.status === 200) {
            const jokesCollection = document.querySelector('#jokes-collection');

            const response = JSON.parse(this.response);
            jokesCollection.appendChild(getJokeCollection(response.value));
        }

    };

    xhr.onProgress = function (event) {};

    xhr.onerror = function () {};

    xhr.send()

    e.preventDefault();
};