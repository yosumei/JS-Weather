
        const apiKey = "709c663b3bdae20fb4a1ca0d8aa0e206";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input")
        const searchBtn = document.querySelector(".search button")
        const weatherİcon = document.querySelector(".weather-icon");


        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            var data = await response.json();
            console.log(data);
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

            if (data.weather[0].main == "Clouds") {
                weatherİcon.src = "images/clouds.png"
            } else if (data.weather[0].main == "Clear") {
                weatherİcon.src = "images/clear.png"
            } else if (data.weather[0].main == "Rain") {
                weatherİcon.src = "images/Rain.png"
            } else if (data.weather[0].main == "Drizzle") {
                weatherİcon.src = "images/Drizzle.png"
            } else if (data.weather[0].main == "Mist") {
                weatherİcon.src = "images/Mist.png"
            }


        }

        searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value);
        })

        checkWeather();

