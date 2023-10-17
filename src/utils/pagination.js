//? currentPage = La pagina actual
//? residents = Arreglo total de residents en la dimension actual

const paginationLogic = (currentPage, residents) => {

    //! Excepcion para el primer render

    if(residents.length === 0) {
        return {
            pages: [1],
            residentsInPages: []
        }
    }

    //* La cantidad de residentes por pagina
    const RESIDENTS_PER_PAGE = 9;
    //* Cantidad total de paginas
    const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE)
    //* Residentes que se van a mostrar en la pagina actual
    const sliceEnd = RESIDENTS_PER_PAGE * currentPage
    const sliceStar = sliceEnd - RESIDENTS_PER_PAGE
    const residentsInPages = residents.slice(sliceStar, sliceEnd)

    //* Generacion de arreglo de las paginas que se van a mostrar
    const pages = []
    for(let i = 1; i <= totalPages; i++){
        pages.push(i)
    }
    return {
        residentsInPages,
        pages,
    }
}
export {
    paginationLogic
}