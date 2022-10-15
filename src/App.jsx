import {useEffect, useState} from 'react'

function App() {
  const [data, setData] = useState()
  // const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState()

  
  useEffect(() => {
    console.log('useeffect')
    const coordinates = () => {
     navigator.geolocation.getCurrentPosition(position => {
      setLocation(position.coords)
    })
    fetchData()
  }

  }, [])
  
  
  

  const fetchData = async () => {
    console.log('entered fetch')
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=2cef8d9b64447d4ce805fcfbe539ea4b&units=imperial`) 
    const fetchedData = await res.json()
    console.log('got data')
    setData(fetchedData)
    // setLoading(false)
  }

  console.log( data ? data : 'no data')
  // console.log(currentDate.getDate(), currentDate.getHours() + 
  // ":" + currentDate.getMinutes())  


  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="container">
     { data &&
        <>
        <p>{`It is currently ${data.main.temp} in ${data.name}`}</p>
        <p className="date">todays date</p>
       </> 
    }
        
      </div>
    </div>
  );
}

export default App;
