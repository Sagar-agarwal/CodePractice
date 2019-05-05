// Initialize

class UI {
    constructor() {
        this.location = document.querySelector("#w-location");
        this.flag = document.querySelector("#country-flag");
        this.description = document.querySelector("#w-desc");
        this.string = document.querySelector("#w-string");
        this.imgIcon = document.querySelector("#w-icon");
        this.humidity = document.querySelector("#w-humidity");
        this.tempMinMax = document.querySelector("#w-temp-min-max");
        this.pressure = document.querySelector("#w-pressure");
        this.wind = document.querySelector("#w-wind");

        this.changeBtn = document.querySelector("#w-change-btn");
        this.changeBtn.addEventListener("click", this.changeLocationClicked);
    }

    paint(res) {
        const tempInCelsius = this.getTempCelsius(res.main.temp);
        const tempInFahrenheit = this.getTempFahrenheit(tempInCelsius);
        const tempMinCelsius = this.getTempCelsius(res.main.temp_min);
        const tempMinFahrenheit = this.getTempFahrenheit(tempMinCelsius);
        const tempMaxCelsius = this.getTempCelsius(res.main.temp_max);
        const tempMaxFahrenheit = this.getTempFahrenheit(tempMaxCelsius);

        this.location.innerText = res.name;
        this.flag.setAttribute("src", `https://www.countryflags.io/${res.sys.country}/flat/32.png`);
        this.description.innerText = res.weather[0].description;
        this.string.innerText = `${tempInFahrenheit} F (${tempInCelsius} C)`;
        this.imgIcon.setAttribute("src", `http://openweathermap.org/img/w/${res.weather[0].icon}.png`);

        this.humidity.innerText = `Humidity: ${res.main.humidity}`;
        this.wind.innerText = `Wind speed: ${res.wind.speed}`;
        this.pressure.innerText = `Pressure: ${res.main.pressure}`;
        this.tempMinMax.innerText = `Temperature (Min|Max): ${tempMinFahrenheit} F(${tempMinCelsius} C) | ${tempMaxFahrenheit} F(${tempMaxCelsius} C)`;
    }

    getTempCelsius(temp) {
        return Number.parseFloat(temp - 273.15).toFixed(1);
    }

    getTempFahrenheit(temp) {
        return Number.parseFloat(temp * (9 / 5) + 32).toFixed(1);
    }

    changeLocationClicked() {
        const city = document.querySelector("#city");
        const state = document.querySelector("#state");

        weather.changeLocation(city.value, state.value);
    }

    showAlert(msg, classNames) {
        const alertDiv = document.querySelector(".alert");
        if (alertDiv) {
            this.removeAlert();
        }

        const alertMsg = document.querySelector(".alert-msg");
        const div = document.createElement("div");
        div.className = classNames;
        div.appendChild(document.createTextNode(msg));

        alertMsg.appendChild(div);

        setTimeout(this.removeAlert, 3000);
    }

    removeAlert() {
        const alertDiv = document.querySelector(".alert");
        alertDiv.remove();
    }
}
