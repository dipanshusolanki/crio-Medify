const fetchStates = async () => {
    try{
        const response = await fetch("https://meddata-backend.onrender.com/states");
        return await response.json();
    }
    catch(error){
        console.log("Failed to fetch states: ", error)

    }
}

export default fetchStates;
