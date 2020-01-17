console.log("Client side Js loaded");

function submit() {
    const location = document.querySelector("#location-input").value;

    fetch(`/weather?address=${location}`).then(response => {
        response.json().then(data => {
            const weatherDetails = document.querySelector("#weather-details");
            weatherDetails.innerHTML = "";
            var div = document.createElement("div");
            div.innerHTML = `<p>${data.Location}</p><p>${data.forecast}</p>`;
            weatherDetails.appendChild(div);
        });
    });
}

// Can also do with event listeners
