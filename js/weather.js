const API_KEY = "0f59d58245b3276f704213c0e25de3d0";

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;
    });
}

function onGeoError(){
    alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);