
const form = document.querySelector('#SearchForm')
const zipEl = document.querySelector('#zip')

form.onsubmit = function(event) {
    event.preventDefault()
    weatherRender(zip.value)
}




async function getWeather (zip){
    let forecast;
    let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&appid=686567711d4462da06595e3d1c4b2703&units=imperial`)
    .then((data) => data.json())
    .then((data) => {
        forecast = data
        console.log(forecast)
        return(forecast)
    
    })
    .catch(error => console.log(error.message));
    return(response)
}


async function weatherBoss(zip){
    let weatherData =  await getWeather(zip)
    console.log(weatherData)
    let filteredData = weatherData.list.filter(i => i.dt_txt.includes('18:00:00'))
    console.log(filteredData)
    return (filteredData)
}


function weatherRender(zip){
    let forecast = weatherBoss(zip)
    for(let i = 0; i<= forecast.length; i++){
        let currentEl = document.querySelector(`day-${i}`)
        let temp = `<p>${forecast[i].main.temp}</p>`
        currentEl.innerHTML += temp
    }
}

weatherRender(54956)