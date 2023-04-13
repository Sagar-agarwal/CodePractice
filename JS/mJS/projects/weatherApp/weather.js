const keys = new Keys();

class Weather {
    constructor(city, state) {
        this.city = city;
        this.state = state;
    }

    async getWeather() {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${
                keys.openWeatherMapKey
            }`
        );

        const resData = await response.json();
        return resData;
    }

    changeLocation(city, state) {
        this.city = city;
        this.state = state;
        getWeather();
    }
}
