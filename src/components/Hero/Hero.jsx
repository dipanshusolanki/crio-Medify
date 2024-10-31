import {InputAdornment, MenuItem, TextField} from "@mui/material";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ServiceCard from "../ServiceCard.jsx";
import Doctor from"/Doctor.svg"
import Lab from "/Drugstore.svg"
import Hospital from "/Hospital.svg"
import MedicalStore from "/Capsule.svg"
import Ambulance from "/Ambulance.svg"
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";



const Hero = ({data}) => {
    const [cityList, setCityList] = useState([]);
    const[state, setState] = useState("");
    const[city, setCity] = useState("");
    const navigate = useNavigate();
    const fetchCities = async (event)=>{
        const stateValue = event.target.value;
        try{
            const response = await fetch(`https://meddata-backend.onrender.com/cities/${stateValue}`);
            const data = await response.json();
            setState(stateValue);
            setCityList(data);
        }
        catch(error)
        {
            console.log("Error fetching Cities: ", error);
        }
    }
    const searchHandler = () => {
        const hospitalQueryParams = new URLSearchParams({state,city}).toString();
        navigate(`/hospitals?${hospitalQueryParams}`);
    }

    useEffect(()=>{
        if(JSON.parse(localStorage.getItem("bookings"))===null)
        {
            localStorage.setItem("bookings", JSON.stringify([]));
        }
    },[])

    return (
        <section className="bg-hero-bg relative mx-auto -top-[96px] h-[832px] max-md:h-fit">
            <div className="container mx-auto pt-[111px] px-8 relative">
                <div className="flex justify-between font-Poppins tracking-[0.02em] max-md:text-center">
                    <div className="flex flex-col pt-[29px] gap-[15px] max-md:gap-[5px] w-[663px] h-[207px] max-md:items-center">
                        <p className=" font-[500] text-[31px] max-md:text-[24px] leading-[68px] text-[#102851]">
                            Skip the travel! Find Online <br/>
                            <span className="font-[700] text-[56px] max-md:text-[40px]">Medical
                                <span className="text-[#2AA8FF]"> Centers</span>
                            </span>
                        </p>
                        <p className="font-[400] text-[20px] max-md:text-[16px] leading-[32px] text-[#5C6169]">
                            Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
                        </p>
                        <button
                            className="w-[177px] h-[48px] bg-[#2AA8FF] px-[36px] py-[12px] font-[500] text-[#FFFFFF] rounded-[8px] text=[16px] leading-[24px]">Find
                            Centers
                        </button>
                    </div>
                    <div className="max-md:hidden relative">
                        <img src="/hero.png" alt="hero" width={585} height={481}/>
                        <div className="absolute top-[37%] -right-[4%]"><img src="/titik.svg" alt=""/></div>
                    </div>
                </div>
                <div className="font-Poppins w-full mx-auto -mt-28 max-md:m-0 max-md:-bottom-[130px] relative z-10 max-md:z-[1] rounded-[15px] bg-[#fff] shadow-hero-shadow px-[35px] py-[54px] max-md:py-[40px] flex flex-col justify-start gap-[63px] max-md:gap-[40px]">
                    <div className="w-full flex justify-end gap-[120px] max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-[25px]">
                        <TextField
                            sx={{
                                // width: "428px",
                                height: "50px",
                                backgroundColor: "#FAFBFE",
                            }}
                            className="max-md:w-[100%] w-[428px]"
                            id="outlined-select-state"
                            select
                            defaultValue="default"
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchSharpIcon/>
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            onChange={(event)=>fetchCities(event)}
                        >
                            <MenuItem value="default" disabled>
                                State
                            </MenuItem>
                            {data.map((option,index) => (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            sx={{
                                // width: "428px",
                                height: "50px",
                                backgroundColor: "#FAFBFE",
                            }}
                            id="outlined-select-city"
                            select
                            className="max-md:w-[100%] w-[428px]"
                            defaultValue="default"
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchSharpIcon/>
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            onChange={(event)=>{setCity(event.target.value)}}
                        >
                            <MenuItem value="default" disabled>
                                City
                            </MenuItem>
                            {cityList.map((option,index) => (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        <button onClick={searchHandler} className="w-[121px] max-md:w-[135px] h-[56px] max-md:h-[50px] bg-[#2AA8FF] font-[500] text-[16px] leading-[24px] text-[#FFFFFF] rounded-[8px] tracking-[0.02em] flex items-center justify-center gap-[6px] py-[12px] pl-[12px] pr-[18px]">
                            <SearchSharpIcon sx={{
                                width: "26px",
                                height: "26px",
                            }} />
                            Search
                        </button>
                    </div>
                    <div className="w-full flex flex-col items-center gap-[25px]">
                        <p className="font-Poppins font-[500] text-[20px] leading-[30px] tracking-[0.02em] text-[#102851]">You may be looking for</p>
                        <div className="w-full flex justify-between max-md:flex-wrap max-md:gap-[15px] max-md:justify-center">
                            <ServiceCard title="Doctors" icon={Doctor}/>
                            <ServiceCard title="Labs" icon={Lab}/>
                            <ServiceCard title="Hospitals" icon={Hospital}/>
                            <ServiceCard title="Medical Store" icon={MedicalStore}/>
                            <ServiceCard title="Ambulance" icon={Ambulance}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero
