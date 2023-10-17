
import { useEffect, useState } from 'react'
import './App.css'
import { getRandomNumber } from './utils/ramdon'
import axios from 'axios'
import Location from './components/Location'
import ResidentList from './components/ResidentList'

function App() {

  const [location, setLocation] = useState(null)

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`)
    .then(({data}) => setLocation(data))
    .catch((err) => console.log(err))
  },[])
    
  return (
    <main className='px-4 min-h-screen bg-black'>
      <Location location={location} setLocation={setLocation} />
      <ResidentList residents={location?.residents ?? []} />
    </main>
  )
}

export default App
