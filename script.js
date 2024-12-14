const apiKey = "YOUR_API_KEY";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function getweather(cityName) {
	const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);

	if(response.status === 404){
		document.querySelector(".error").style.display = "block";
	}
	else{
		let data = await response.json();
	let weatherIcon = document.querySelector(".weather-icon");
	document.querySelector(".city").textContent= data.name;
	document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
	document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
	document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

	if(data.weather[0].main == "Clouds"){
		weatherIcon.src = "./images/clouds.png"
	}
	else if(data.weather[0].main == "Drizzle"){
		weatherIcon.src = "./images/drizzle.png"
	}
	else if(data.weather[0].main == "Rain"){
		weatherIcon.src = "./images/rain.png"
	}
	else if(data.weather[0].main == "Clear"){
		weatherIcon.src = "./images/clear.png"
	}
	else if(data.weather[0].main == "Mist"){
		weatherIcon.src = "./images/mist.png"
	}

	document.querySelector(".weather").style.display = "block";
	document.querySelector(".error").style.display = "none";
	}	
}

let searchBtn = document.querySelector(".search button");
let searchInput = document.querySelector(".search input");

searchBtn.addEventListener("click", () => {
	getweather(searchInput.value);
})



