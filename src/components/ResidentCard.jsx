import axios from "axios"
import { useEffect, useState } from "react"
import { characterStatus } from "../constants/resident"


const ResidentCard = ({residentEndpoint}) => {
    const [resident, setResident] = useState(null)

//TODO ('Alive', 'Dead' or 'unknown')

    

    useEffect(() => {
        axios.get(residentEndpoint)
        .then(({data}) => setResident(data))
        .catch((err) => console.log(err))
    },[]) 


  return (
    <article className="border-solid border-4 p-2 border-green-950">
        <header className="relative">
            <img src={resident?.image} alt="" />

            {/* Status */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-1 rounded-md flex items-center gap-2">
                <div className={`h-3 w-3 ${characterStatus [resident?.status]} rounded-full`}></div>
                <span>{resident?.status}</span>
            </div>
        </header>
        <div className="grid p-4 gap-2">
            
            <h2 className="text-xl italic text-green-600">{resident?.name}</h2>
            <ul className="grid gap-3 text-green-300 px-4 py-3">
                <li><span> Especies :</span> {resident?.species} </li>
                <li><span> Origin :</span> {resident?.origin.name}</li>
                <li><span> Times appear :</span> {resident?.episode.length}</li>
            </ul>
        </div>
    </article>
  )
}

export default ResidentCard
