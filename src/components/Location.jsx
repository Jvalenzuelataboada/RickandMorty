import { IconSearch } from "@tabler/icons-react"
import axios from "axios";


const Location = ({location, setLocation}) => {
   

  const handleSubmit = (e) => {
    e.preventDefault()
    const idLocation = e.target.idLocation.value

    axios
      .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err))
  }


  return (
    <section>

      <div className="flex justify-center mb-20 mb:mb-2">
        <img className="w-[40%] mt-[-10%] bg-transparent animate" src="./vorticeblack.jpg" alt="" />
        <img className="absolute w-[65%] m-auto animate-flotar mt-5" src="./rci.png" alt="" />
      </div>

      <div className="flex justify-center">     
      <form onSubmit={handleSubmit} className="flex gap-2 bg-green-500">
        <input placeholder="type a new location" name="idLocation" className="text-black indent-1 px-10" type="number" />
        <button type="submit" className="flex justify-center p-2 gap-2 "> Search <IconSearch /> </button>
      </form>
      </div>


      {/* Location info */}
      <div className="grid justify-center p-4 text-lg text-white/80 italic space-x-2">
        <section className="border-double border-8 py-4 px-4 border-green-800 text-left">
        
          <h3 className="text-2xl text-green-100"> Wellcome to:  {location?.name}!</h3>

          <ul className="text-2xl p-2 italic text-green-300">
            <li className="p-2 italic"> Type:{location?.type} </li>
            <li className="p-2 italic"> Dimension: {location?.dimension} </li>
            <li className="p-2 italic"> Population: {location?.residents.length} </li>

          </ul>
        </section>
      </div>
    </section>

   
  )
}

export default Location
