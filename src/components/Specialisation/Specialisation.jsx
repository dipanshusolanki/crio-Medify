import SpecialisationCard from "./SpecialisationCard.jsx";
import Dentistry from '/dentistry.svg'
import PrimaryCare from '/primarycare.svg'
import Cardiology from '/cardiology.svg'
import MRI from '/mri.svg'
import BloodTest from '/bloodtest.svg'
import Piscologist from '/piscologist.svg'
import Laboratory from '/lab.svg'
import XRay from '/x-ray.svg'


const Specialisation = () => {
    return (
        <section className="w-full h-[729px] max-md:h-fit max-md:py-12 max-md:px-4 bg-hero-bg flex items-center">
            <div className="w-[1440px] h-fit mx-auto flex flex-col items-center justify-center gap-[62px] max-md:gap-[50px]">
                <p className="font-Poppins font-[600] text-[48px] max-md:text-[34px] leading-[67px] text-center text-[#1B3C74]">Find By Specialisation</p>
                <div className="flex flex-col items-center justify-center gap-[45px]">
                    <div className="flex flex-wrap justify-center items-center gap-[30px] max-md:gap-[20px]">
                        <SpecialisationCard icon={Dentistry} title={"Dentistry"}/>
                        <SpecialisationCard icon={PrimaryCare} title={"Primary Care"}/>
                        <SpecialisationCard icon={Cardiology} title={"Cardiology"}/>
                        <SpecialisationCard icon={MRI} title={"MRI Resonance"}/>
                        <SpecialisationCard icon={BloodTest} title={"Blood Test"}/>
                        <SpecialisationCard icon={Piscologist} title={"Piscologist"}/>
                        <SpecialisationCard icon={Laboratory} title={"Laboratory"}/>
                        <SpecialisationCard icon={XRay} title={"X-Ray"}/>
                    </div>
                    <button className="h-[50px] w-[147px] bg-[#2AA8FF] rounded-[8px] text-[#FFFFFF] font-Poppins font-[500] text-[16px] leading-[24px] tracking-[0.02em]">View All</button>
                </div>
            </div>
        </section>
    )
}
export default Specialisation
