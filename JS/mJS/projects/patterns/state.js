const PageState = function() {
    let currentState = new homeState(this);

    this.init = function() {
        this.changeState(new homeState());
    };

    this.changeState = function(state) {
        currentState = state;
    };
};

// Home State

const homeState = function(page) {
    document.querySelector("#heading").textContent = null;
    document.querySelector("#content").innerHTML = `
    <div class="jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
    `;
};

// About State
const aboutState = function(page) {
    document.querySelector("#heading").textContent = "About Us";
    document.querySelector("#content").innerHTML = `
    <p>This is about page</p>
    `;
};

// Contact State
const contactState = function(page) {
    document.querySelector("#heading").textContent = "Contact Us";
    document.querySelector("#content").innerHTML = `
    <form>
        <div class="form-group">
            <label for="">Name</label>
            <input type="text" class="form-control">
        </div>
        <div class="form-group">
            <label for="">Email Address</label>
            <input type="email" class="form-control">
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
    </form>

    `;
};

// Initiate page
var page = new PageState();

// Init first page
page.init();

// UI Vars
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact-us");

// StateHandler

home.addEventListener("click", e => {
    page.changeState(new homeState;

    e.preventDefault();
});

about.addEventListener("click", e => {
    page.changeState(new aboutState);

    e.preventDefault();
});

contact.addEventListener("click", e => {
    page.changeState(new contactState);

    e.preventDefault();
});
