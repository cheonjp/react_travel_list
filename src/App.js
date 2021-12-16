import React, {useState, useEffect} from 'react'
import Tours from './Tours'
import Loading from './Loading'
// import Tours from './Tours'
import './App.css';

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading]=useState(true)
  const [trip, setTrip]=useState([])

  const fetchTour = async ()=>{
    await fetch(url)
    .then((res)=> res.json())
    .then((data)=>{
      setTrip(data)
    })
    setLoading(false)
  }

  const removeTour = (id) =>{
    const newTours = trip.filter((eachTrip)=> eachTrip.id !== id)
    setTrip(newTours)
    console.log(trip)
  }

  useEffect(()=>{
    fetchTour()
  },[])

  if(loading){
    return(
      <Loading />
    )
  }
  if(trip.length === 0 ){
    return(
      <main>
        <h1 className="resetText">No more trip to show</h1>
        <button className="resetBtn" onClick={()=>fetchTour()}>Reset the Trip List</button>
      </main>
    )
  }
  
  return (
    <div className="App">
      <div className="container">
        <h1 className="pageTitle">Trip List</h1>
      </div>
      <Tours trip = {trip} removeTour={removeTour}/>
    </div>
  );

}

export default App;
