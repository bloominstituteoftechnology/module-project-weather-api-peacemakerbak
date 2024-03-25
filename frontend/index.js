async function moduleProject4() {

  // 👇 WORK WORK BELOW THIS LINE 👇
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  let descriptions = [
    ["Sunny", "☀️"],
    ["Cloudy", "☁️"],
    ["Rainy", "🌧️"],
    ["Thunderstorm", "⛈️"],
    ["Snowy", "❄️"],
    ["Partly Cloudy", "⛅️"]
  ]

  // 👉 Tasks 1 - 5 go here
  document.querySelector('#weatherWidget').style.display = 'none' // overide the default display style of the weatherWidget
  document.querySelector('#citySelect').addEventListener('change', async (event) => { //dropdown ID is citySelect & event listener for change event
    console.log('selection changed') // test to see if the event listener is working
    try {
      event.target.setAttribute('disabled', 'disabled') // disable the dropdown after selection
      document.querySelector('#weatherWidget').style.display = 'none' // hide the weatherWidget
      document.querySelector('.info').textContent = 'Fetching weather data...' // capture the p of interest: class name of info & display fetching weather data

      let city = event.target.value // get the selected city
      let url = `hhttp://localhost:3003/api/weather?city=${city}` // capture the url to fetch the weather data
      
      const response = await axios.get(url) // fetch the weather data

      document.querySelector('#weatherWidget').style.display = 'block' // display the weatherWidget
      document.querySelector('.info').textContent = '' // clear the fetching weather data message 
      event.target.removeAttribute('disabled') // enable the dropdown after fetching the weather data

      let { data } = response // destructure the data from the response

      

      document.querySelector('#apparentTemp div:nth-child(2)') // display the apparent temperature
        .textContent = `${data.current.apparent_temperature}°` // display the apparent temperature 
      document.querySelector('#todayDescription')
        .textContent = description.find(d => d[0] === data.current.weather_description)[1] // display the weather description
      document.querySelector('#todayStats div:nth-child(1)')
        .textContent = `${data.current.temperature_min}°` / `${data.current.temperature_max}°` // display the min and max temperature
      document.querySelector('#todayStats div:nth-child(2)') // display the humidity
        .textContent = `Precipitation: ${data.current.precipitation_probability * 100}%`
      document.querySelector('#todayStats div:nth-child(3)') // display the wind speed
        textContent = `Humidity: ${data.current.humidity}%` // display the humidity
      document.querySelector('#todayStats div:nth-child(4)') // display the wind speed
        .textContent = `Wind: ${data.current.wind_speed} mps` // display the wind speed

    } catch (err) {
      console.log('Error fetching weather data', err)// log error if there is an error fetching the weather data
    }
  })






  // 👆 WORK WORK ABOVE THIS LINE 👆

}

// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject4 }
else moduleProject4()
