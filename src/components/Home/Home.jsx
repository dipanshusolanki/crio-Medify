import Hero from "../Hero/Hero.jsx";
import Offer from "../Offer/Offer.jsx";
import Specialisation from "../Specialisation/Specialisation.jsx";
import Specialist from "../Specialist/Specialist.jsx";
import Caring from "../Caring/Caring.jsx";
import News from "../News/News.jsx";
import Family from "../Family/Family.jsx";
import Faq from "../FAQ/Faq.jsx";
import {useEffect, useState} from "react";

const Home = () => {
    const [stateList, setStateList] = useState([]);

    useEffect(()=>{
        const fetchStates = async () => {
            try{
                const response = await fetch("https://meddata-backend.onrender.com/states");
                const data = await response.json();
                setStateList(data);
            }
            catch(error){
                console.log("Failed to fetch states: ", error)

            }
        }
        fetchStates();
    },[])

    return (
        <>
            <Hero data={stateList}/>
            <Offer/>
            <Specialisation/>
            <Specialist/>
            <Caring/>
            <News/>
            <Family/>
            <Faq/>
        </>
    )
}
export default Home
