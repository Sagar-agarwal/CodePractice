// Instantiate classes
const github = new Github();

// get document elements
const searchUser = document.getElementById("search-user");

// Event listeners
searchUser.addEventListener("keyup", e => {
    const searchText = e.target.value;

    if (searchText !== "") {
        github.getUser(searchText).then(data => {
            console.log(data);
        });
    }
});
