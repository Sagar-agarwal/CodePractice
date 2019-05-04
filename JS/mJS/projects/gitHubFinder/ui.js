class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${user.avatar_url}" alt="user profile image" class="img-fluid mb-2">
                        <a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                        <br>
                    </div>
                </div>
            </div>
            <div class="repos-info">
                <h3 class="page-heading mb-3">User Repos</h3>
                <div id="repos">
                </div>
            </div>
            
        `;
    }

    showRepos(repos) {
        const reposEle = document.getElementById("repos");

        let reposBody = "";

        repos.forEach(repo => {
            reposBody += `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-6 pl-md-5">
                        <a href="${repo.html_url}" class="pl-5" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6 pl-5">
                        <span class="badge badge-primary">Starts: ${repo.stargazers_count}</span>
                        <span class="badge badge-success">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-secondary">Forks: ${repo.forks}</span>
                    </div>
                </div>
            </div>
            `;
        });

        reposEle.innerHTML = reposBody;
    }

    showAlert(msg, classNames) {
        // Clear existing Alert Message
        this.clearAlert();

        //create Alert Message Element
        const div = document.createElement("div");
        div.className = classNames;
        div.appendChild(document.createTextNode(msg));

        const container = document.querySelector(".search-container");
        const search = document.querySelector(".search");

        // Add alert message above search box
        container.insertBefore(div, search);

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert() {
        const alert = document.querySelector(".alert");

        if (alert) {
            alert.remove();
        }
    }

    clearProfile() {
        this.profile.innerHTML = "";
    }
}
