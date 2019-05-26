class UI {
    constructor() {
        this.userName = document.querySelector("#user-name");
        this.userInfo = document.querySelector("#user-info");
        this.userImg = document.querySelector("#user-img");
        this.userProfile = document.querySelector("#user-profile");

        // set user card hidden on load
        this.userProfile.style.display = "none";
    }

    displayUser(userData) {
        console.log(userData);
        const name = userData.name,
            location = userData.location,
            dob = userData.dob,
            img = userData.picture;

        this.userName.value = `${name.title} ${name.first} ${name.last}`;
        this.userInfo.innerHTML = `
            <li class="list-group-item">Age: ${dob.age}</li>
            <li class="list-group-item">Location: ${location.city}, ${location.state}</li>
            <li class="list-group-item">Phone: ${userData.phone}</li>
            <li class="list-group-item">email: ${userData.email}</li>
        `;
        this.userImg.setAttribute("src", img.large);

        this.userProfile.style.display = "block";
    }
}
