const api_url = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=9b5a648d8ac9f1a52e52001da54a7129';
//
// api + '&q=tên_thành_phố' để có thể lấy ra data
//
// data.cod === '404' -> k tìm thấy địa điểm
//
// bài tập làm ở đây
//
window.addEventListener('keyup', function(e) {
    console.log(e.keyCode);
    if (e.keyCode == 13) {
        let location = input.value;
        if (!location)  {
            alert('Tên địa điểm không được để trống')
            return false
        }
    get_weather_data({location: location})
    }
});

let btn = document.querySelector('.form button'),
    input = document.querySelector('.form input')
    tempeture = document.querySelector('.tempeture')
    location_text = document.querySelector('.location')
    image = document.querySelector('.image')
    detail = document.querySelector('.detail')

btn.addEventListener('click', function() {
    // let location = input.value;
    // // Check value rỗng
    // if (!location)  {
    //     alert('Tên địa điểm không được để trống')
    //     return false
    // }
    // get_weather_data({location: location})
});

async function get_weather_data(params) {
    let {location} = params;
    const response = await fetch(api_url + `&q=${location}`);
    const data = await response.json();
    await reset_dom();
    await generate_weather(data);
}

function generate_weather(params) {
    if (params.cod == '404') {
        image.innerHTML = '<span>Không tồn tại địa điểm</span>';
        return false;
    }

    let {main, name, weather, wind} = params,
        {tempeture, feels_like, humidity } = main

    // tempeture.innerHTML = `${temp} <span> độ C </span>`;
    location_text.innerHTML = `${name} / Feels like ${feels_like} độ`;

    //
    if (weather[0].main.toLowerCase() == 'clouds') {
        image.style.backgroundImage = 'url(images/cloudy.png)';
    }
    if (weather[0].main.toLowerCase() == 'rain') {
        image.style.backgroundImage = 'url(images/heavy_rain.png)';
    }
}

detail.innerHTML = `
    <b class="text-center">
		<span><i class="fas fa-water"></i>Humidity</span>
		${Humidity}%
	</b>
	<b class="text-center">
		<span><i class="fas fa-wind"></i> Wind speed</span>
		${wind.speed}km/h
	</b>`;


function reset_dom() {
    image.innerHTML = '';
    image.style.backgroundImage = '';
    tempeture.innerHTML = '';
    location_text.innerHTML = '';
}



