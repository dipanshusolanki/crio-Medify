import {InputAdornment, MenuItem, TextField} from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import fetchStates from "../../utilities/fetchStates.js";
import {useEffect, useState} from "react";
import fetchCities from "../../utilities/fetchCities.js";
import {useSearchParams} from "react-router-dom";
import fetchHospitals from "../../utilities/fetchHospitals.js";
import HospitalCard from "./HospitalCard.jsx";
import CheckupAd from '/freecheckupad.png'
import Verified from "/verified.svg"
import CircularProgress from '@mui/material/CircularProgress';


const Hospitals = () => {
    const [stateList, setStateList] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [searchBar, setSearchBar] = useState({state:"",city:""});
    const [searchParams, setSearchParams] = useSearchParams();
    const [hospitalList, setHospitalList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        (async ()=>{
            const data = await fetchStates();
            setStateList(data);
        })();
    },[])

    useEffect(() => {
        if(searchParams.size===0)
        {
            setIsLoading(false)
        }
        else
        {
            setIsLoading(true);
        }
        (async ()=>{
            const data = await fetchHospitals([...searchParams]) || [];
            setHospitalList(data);
            if(data)
            {
                setIsLoading(false);
            }
        })();
    }, [searchParams]);

    const fetchCity = async(event) => {
            const data = await fetchCities(event.target.value);
            setSearchBar(prev=> ({...prev,state:event.target.value}))
            setCityList(data);
    }

    const searchHandler = () => {
        setSearchParams({state: searchBar.state, city: searchBar.city});
    }

    return (
        <section className="relative w-full h-fit bg-hospital-cardholder-bg pb-[123px]">
            <div className="w-full h-[110px] max-md:h-[150px] rounded-b-[16px] bg-hospital-bg">
                <div className="w-[80%] max-md:w-[90%] h-[111px] max-md:h-fit max-md:py-[30px] max-md:px-[20px] absolute top-[53px] max-md:top-[33px] left-[10%] max-md:left-[5%] rounded-[15px] bg-[#ffffff] shadow-hospital-searchbar flex justify-center items-center">
                    <div className="w-full h-fit flex justify-center items-center gap-[20px] max-md:flex-col max-md:justify-start max-md:items-center">
                        <TextField
                            className="w-[30%] max-md:w-[100%]"
                            sx={{
                                // width: "30%",
                                height: "50px",
                                backgroundColor: "#FAFBFE",
                            }}
                            id="outlined-select-state"
                            select
                            defaultValue="default"
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LocationOnOutlinedIcon/>
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            onChange={
                                (event) => fetchCity(event)
                            }
                        >
                            <MenuItem value="default" disabled>
                                State
                            </MenuItem>
                            {stateList.map((option, index) => (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            className="w-[40%] max-md:w-[100%]"
                            sx={{
                                height: "50px",
                                backgroundColor: "#FAFBFE",
                            }}
                            id="outlined-select-city"
                            select
                            defaultValue="default"
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LocationOnOutlinedIcon/>
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            onChange={(event) => {
                                setSearchBar(prev => ({...prev, city: event.target.value}))
                            }}
                        >
                            <MenuItem value="default" disabled>
                                City
                            </MenuItem>
                            {cityList.map((option, index) => (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        <button
                            onClick={searchHandler}
                            className="max-md:w-[170px] w-[231px] h-[56px] bg-[#2AA8FF] font-[500] text-[16px] leading-[24px] text-[#FFFFFF] rounded-[8px] tracking-[0.02em] flex items-center justify-center gap-[6px] py-[12px] pl-[12px] pr-[18px]">
                            <SearchSharpIcon sx={{
                                width: "26px",
                                height: "26px",
                            }}/>
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <>
                {
                    !isLoading ?
                    <>
                        {
                            hospitalList.length !== 0 ?
                            <>
                                <div className="w-[1440px] mx-auto mt-[170px] max-md:mt-[200px] max-md:w-full max-md:h-fit max-md:px-[20px] min-h-[269px] flex flex-col gap-[24px]">
                                    <div className="w-[643px] h-[64px] flex flex-col gap-[4px] max-md:w-full max-md:h-fit">
                                        <p className="pl-[5px] font-Poppins font-[500] text-[24px] max-md:text-[22px] leading-[36px]" >{hospitalList.length} medical centers available in {hospitalList[0]["City"]}</p>
                                        <p className="w-[600px] max-md:w-full flex gap-[10px] font-Poppins font-[400] text-[16px] leading-[24px]" >
                                            <span>
                                                <img className="w-[24px] h-[24px]" src={Verified} alt="verifiedcheck"/>
                                            </span> Book appointments with minimum wait-time & verified doctor details
                                        </p>
                                    </div>
                                    <div className="flex justify-between w-full">
                                        <div className="flex flex-col justify-start items-start gap-[20px] max-md:w-full max-md:h-fit max-md:py-[20px]">
                                            {
                                                hospitalList.map((hospital, index) => (
                                                    <HospitalCard key={index} hospital={hospital}/>
                                                ))
                                            }
                                        </div>
                                        <div className="w-[363px] h-[268px] max-md:hidden">
                                            <img className="w-full h-full" src={CheckupAd} alt="checkad"/>
                                        </div>
                                    </div>
                                </div>
                            </> :
                            <>
                                <div className="w-[1440px] h-[400px] max-md:w-full max-md:h-[200px] max-md:mt-[250px] mt-[170px] mx-auto flex justify-center items-center font-Poppins font-[400] text-[40px] max-md:text-[26px] max-md:text-center text-[#1B3C74] uppercase">No Hospitals Found. Try searching again!</div>
                            </>
                        }
                    </> :
                    <>
                        <div className="max-md:w-full max-md:h-[200px] max-md:mt-[250px] w-[1440px] h-[400px] mt-[170px] mx-auto flex justify-center items-center">
                            <CircularProgress size="5rem" />
                        </div>
                    </>
                }
            </>
        </section>
    )
}
export default Hospitals
