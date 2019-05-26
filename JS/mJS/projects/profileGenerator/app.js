// init
const ru = new RandomUser();
const ui = new UI();

// event listeners
document.addEventListener("load", () => {
    ru.getUser("male")
        .then(data => {
            ru.maleProfiles = data.profileData;
        })
        .catch(err => {
            console.log(`Error: ${err.message}`);
        });

    ru.getUser("female")
        .then(data => {
            ru.femaleProfiles = data.profileData;
        })
        .catch(err => {
            console.log(`Error: ${err.message}`);
        });
});
document.querySelector("#next-male").addEventListener("click", nextMale);
document.querySelector("#next-female").addEventListener("click", nextFemale);

// Next Clicked
function nextMale() {
    ui.displayUser(ru.maleProfileIterator.next());
}

function nextFemale() {
    ui.displayUser(ru.femaleProfileIterator.next());
}
