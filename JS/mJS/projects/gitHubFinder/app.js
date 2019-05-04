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
            } else {
                // show user profile
                ui.showProfile(data.profileData);
            }
        });
    } else {
        // clear profile
    }
});
