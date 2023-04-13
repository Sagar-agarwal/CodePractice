// Instantiate classes
const github = new Github();
const ui = new UI();

// get document elements
const searchUser = document.getElementById("search-user");

// Event listeners
searchUser.addEventListener("keyup", e => {
    const searchText = e.target.value;

    if (searchText !== "") {
        github.getUser(searchText).then(data => {
            if (data.profileData.message === "Not Found") {
                // show alert message
                ui.showAlert("User profile not found", "alert alert-danger");
            } else {
                // show user profile
                ui.showProfile(data.profileData);

                github.getRepos(data.profileData.repos_url).then(repos => {
                    console.log();
                    if (repos.reposData.length) {
                        ui.showRepos(repos.reposData);
                    }
                });
            }
        });
    } else {
        // clear profile
        ui.clearProfile();
    }
});
