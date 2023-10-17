import { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import { paginationLogic } from "../utils/pagination";


const ResidentList = ({ residents }) => {
    

  const [currentPage, setCurrentPage] = useState(1);

  const {pages, residentsInPages } = paginationLogic(currentPage, residents);

  useEffect(() => {
    setCurrentPage(1)
  },[residents])

  return (
    <section>
      <section className="grid grid-cols-[repeat(auto-fit,_280px)] justify-center gap-6 max-w-[1000px] mx-auto py-10">
        {residentsInPages.map((resident) => (
            <ResidentCard key={resident} residentEndpoint={resident} />
            ))}
      </section>
      {/* Paginacion */}
      <ul className="text-lg flex gap-4 justify-center flex-wrap pb-10">
         {pages.map((page) => (
            <li key={page}>
              <button className={`bg-white text-black w-10 h-10 rounded-full hover:bg-blue-600 ${page === currentPage && "bg-blue-700"}`} onClick={() => setCurrentPage(page)}> {page} </button>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default ResidentList

