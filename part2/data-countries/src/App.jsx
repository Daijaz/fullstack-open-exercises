import { useState, useEffect } from 'react'
import axios from 'axios'
import capitalWeather from './services/capitalWeather'

function App() {
  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState({})
  const [weatherCapital, setWeatherCapital] = useState({}) 
  const [flag, setFlag] = useState(false)

  const handleCountry = ((event) => {
    console.log(event.target.value)
    setCountry(event.target.value)
    setFlag(false)
  })

  useEffect(() => {
      axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => setCountries(response.data))
  }, [])

  useEffect(() => {
    if (flag && selectedCountry.capital) {

        capitalWeather.getWeather(selectedCountry.capital[0])
        .then(response => {
          setWeatherCapital(response.data.list[0]); 

        })
        .catch(error => {
          console.error("Error fetching weather:", error);

        });


    }
  }, [flag, selectedCountry.capital]); // Dependencias: se ejecuta cuando 'flag' o 'selectedCountry.capital' cambian




  const copyCountries = countries.filter((nation) => nation.name.common.toLowerCase().includes(country.toLowerCase()) ? nation : '' )

  const selectCountry = ((id) => {
    setSelectedCountry(copyCountries[id])
    setFlag(true)

  })

  if(flag) {
    return (
      <>
        <header>
          <label htmlFor="input">find countries</label>  
          <input type="text" onChange={handleCountry} name='input' value={country}/>
        </header>
        <main>
          <h1>{selectedCountry.name.common}</h1>
          <p>Capital {selectedCountry.capital[0]} </p>
          <p>Area {selectedCountry.area}</p>
          <h2>Languages</h2>
          <ul>
            {Object.values(selectedCountry.languages)
            .map((language) => 
              <li key={language}>{language}</li>
            )}
          </ul>
          <img src={selectedCountry.flags.png} alt={selectedCountry.flags.alt} />
          <h2>Weather in {selectedCountry.capital[0]}</h2>
          {weatherCapital && weatherCapital.main ? (
            <>
              <p>Temperature: {weatherCapital.main.temp} kelvin grades</p>
              <img src={`https://openweathermap.org/img/wn/${weatherCapital.weather[0].icon}@2x.png`} alt="" />
              <p>Wind {weatherCapital.wind.speed} m/s </p>
            </>

              
          ) : (
              <p>Temperature: Loading...</p>
          )}
        </main>
      </>
    )
  }
  
  if ( country !== '') {
    if ( copyCountries.length > 10) {
      return (
        <> 
          <header>
          <label htmlFor="input">find countries</label>  
          <input type="text" onChange={handleCountry} name='input' value={country}/>
          <p>
            {copyCountries.length > 10 ? 'Too many matches, specify another filter.' : ''}
          </p>  
          </header>  
        </>
      )
    } else if (copyCountries.length > 1 && copyCountries.length < 10 ) {
      return (
        <>
          <header>
          <label htmlFor="input">find countries</label>  
          <input type="text" onChange={handleCountry} name='input' value={country}/>
          <ul>
              {copyCountries.map((nation, id) => <li key={id}>{nation.name.common} <button onClick={() => selectCountry(id) }>Show</button></li>)}
          </ul>
            
          </header>
        </>
      )
    } else if (copyCountries.length === 1) {
      return (
        <>
         <header>
         <label htmlFor="input">find countries</label>  
         <input type="text" onChange={handleCountry} name='input' value={country}/>
         </header>
         <main>
          <h1>{copyCountries[0].name.common}</h1>
          <p>Capital {copyCountries[0].capital[0]} </p>
          <p>Area {copyCountries[0].area}</p>
          <h2>Languages</h2>
          <ul>
            {Object.values(copyCountries[0].languages)
            .map((language) => 
              <li key={language}>{language}</li>
            )}
          </ul>
          <img src={copyCountries[0].flags.png} alt={copyCountries[0].flags.alt} />
          {selectCountry(0)}
          {weatherCapital && weatherCapital.main ? (
            <>
              <p>Temperature: {weatherCapital.main.temp} kelvin grades</p>
              <img src={`https://openweathermap.org/img/wn/${weatherCapital.weather[0].icon}@2x.png`} alt="" />
              <p>Wind {weatherCapital.wind.speed} m/s </p>
            </>
          ) : (
              <p>Temperature: Loading...</p>
          )}

         </main>
        </>
      )
    } else if (copyCountries.length === 0) {
      return (
        <>
         <header>
          <label htmlFor="input">find countries</label>  
          <input type="text" onChange={handleCountry} name='input' value={country}/>
          <p>There are not countries with that name.</p>
         </header>
        </>
      )
    }

  } else {
    return (
      <>
        <header>
        <label htmlFor="input">find countries</label>  
        <input type="text" onChange={handleCountry} name='input' value={country}/>
        </header>
      </>
    )
  } 

}

export default App
