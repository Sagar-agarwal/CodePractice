// On Blur event listeners
document.querySelector("#name").addEventListener("blur", validateName);
document.querySelector("#zip").addEventListener("blur", validateZip);
document.querySelector("#email").addEventListener("blur", validateEmail);
document.querySelector("#phone").addEventListener("blur", validatePhone);

function validateName() {
    const name = document.querySelector("#name");
    const re = /^[A-za-z\s\.]{2,30}$/;
    if (re.test(name.value)) {
        name.classList.remove("is-invalid");
    } else {
        name.classList.add("is-invalid");
    }
}

function validateZip() {
    const zip = document.querySelector("#zip");
    const re = /^[0-9]{5}(-[0-9]{3})?$/;
    if (re.test(zip.value)) {
        zip.classList.remove("is-invalid");
    } else {
        zip.classList.add("is-invalid");
    }
}

function validateEmail() {
    const email = document.querySelector("#email");
    const re = /^\w([\._]?\w+)*@\w+(\.\w{2,3})+$/;
    if (re.test(email.value)) {
        email.classList.remove("is-invalid");
    } else {
        email.classList.add("is-invalid");
    }
}

function validatePhone() {
    const phone = document.querySelector("#phone");
    const re = /^[0-9]{4}-?.?[0-9]{3}-?.?[0-9]{3}$/;
    if (re.test(phone.value)) {
        phone.classList.remove("is-invalid");
    } else {
        phone.classList.add("is-invalid");
    }
}
