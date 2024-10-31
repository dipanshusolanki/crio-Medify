const fetchCities = async (stateValue) => {
    try{
        const response = await fetch(`https://meddata-backend.onrender.com/cities/${stateValue}`);
        return await response.json();
    }
    catch(error){
        console.log("Failed to fetch Cities: ", error)

    }
}

export default fetchCities;
