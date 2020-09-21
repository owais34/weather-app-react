import React,{useState} from 'react';
import './App.css';
import axios from 'axios'
import Card from './components/Card/Card';

function App() {
  const [state, setstate] = useState("")
  const [fore,setfore]=useState({error:" ",forecast:{}})

  const onTextChange=(event)=>{
    setstate(event.target.value)
  }
  const onClick=()=>{
    axios.get(`https://owais-weather-app.herokuapp.com/weather?address=${state}`)
    .then(response=>{
      setfore(response)
    })


  }
  return (
    <div className="App">
      <div className="display">
      <h1 className="main-heading">Weather App</h1>
      <h3 className="sub-heading">Find the weather at your address</h3>
      </div>
      <h2>Enter the location address below</h2>
      <input type="text" placeholder="address" value={state} onChange={onTextChange}></input>
      <button className="button" onClick={onClick}>Get Weather</button>
      { 
        
        (fore.error)?(<h2>{fore.error}</h2>):
        (<Card img_url={fore.forecast.icon}
          location={fore.location}
          description={fore.forecast.description}
          temp={fore.forecast.temerature}
          wspeed={fore.forecast.wind_speed}
          precip={fore.forecast.precipitation}
        />)
      }
    </div>
  );
}

export default App;
