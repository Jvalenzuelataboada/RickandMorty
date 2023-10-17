const getRandomNumber = (limit) => {
    
    // entre 0 y 0.99999999 
    return Math.floor(Math.random() * limit) + 1
    
}

export {
    getRandomNumber
}