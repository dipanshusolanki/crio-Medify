const fetchHospitals = async (params) =>{
    try
    {
        const state = params[0][1];
        const city = params[1][1];
        const response = await fetch(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
        return await response.json();
    }
    catch (error) {
        console.log("Error Fetching Hospitals: ", error)
    }
}

export default  fetchHospitals;
