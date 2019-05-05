// Init
const weather = new Weather("London", "UK");
const ui = new UI();

// Events
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
    weather
        .getWeather()
        .then(resData => {
            ui.paint(resData);
            console.log(JSON.stringify(resData));
        })
        .catch(err => {
            ui.showAlert(`Location could not be found`, `alert alert-danger`);
        });
}
