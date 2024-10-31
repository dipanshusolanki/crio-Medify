import logo from "../../assets/medify_logo.svg";
import {navLinks} from "../../constants/index.js";
import {MenuRounded} from "@mui/icons-material";
import {NavLink, Link} from "react-router-dom";
import {useState} from "react";
import CloseIcon from '@mui/icons-material/Close';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <header className="relative z-[5]">
        <nav className="container mx-auto flex flex-wrap justify-between px-8 items-center h-[96px]">
          <div className="w-[92px] h-[27px]">
            <Link to="/">
              <img src={logo} alt="logo"/>
            </Link>
          </div>
          <div className="h-full flex gap-[40px] items-center font-Poppins max-xl:hidden">
            <ul className="flex gap-[40px] font-[400] h-full leading-[21px] text-[14px] text-[#102851]">
              {
                navLinks.map((link) => (
                    <li className="h-full flex items-center" key={link.id}>
                      <NavLink to={link.to} className={({isActive})=>(
                        isActive ? "h-full flex items-center text-[#2AA7FF] shadow-navlink" : ""
                      )}>{link.name}</NavLink>
                    </li>
                ))
              }
            </ul>
            <NavLink to="bookings" className="w-[130px] h-[40px] bg-[#2AA8FF] font-[500] text-[#FFFFFF] rounded-[8px] flex justify-center items-center">
              My Bookings
            </NavLink>
          </div>
          <div onClick={()=>setIsOpen(true)} className="xl:hidden border-2 border-gray-300 flex items-center justify-center p-1 cursor-pointer">
            <MenuRounded/>
          </div>
        </nav>
        {
          isOpen &&
            <>
              <nav className="h-screen w-screen fixed z-[999] top-[0%] left-[0%] bg-[#E7F0FF] flex justify-center items-center">
                <div onClick={() => setIsOpen(false)}
                     className="max-md:w-[40px] max-md:h-[40px] absolute top-[50px] right-[50px] border-2 border-gray-300 flex items-center justify-center p-1 cursor-pointer">
                  <CloseIcon/>
                </div>
                <div className="mt-[40px] h-fit w-[70%] py-[40px] flex flex-col gap-[40px] items-center justify-start font-Poppins">
                  <ul className="flex flex-col gap-[15px] font-[400] h-full leading-[21px] text-[14px] text-[#102851] justify-start items-center">
                    {
                      navLinks.map((link) => (
                          <li className="h-[50px] flex items-center text-[18px]" key={link.id}>
                            <NavLink onClick={()=>setIsOpen(false)} to={link.to} className={({isActive}) => (
                                isActive ? "h-full flex items-center text-[#2AA7FF] shadow-navlink" : ""
                            )}>{link.name}</NavLink>
                          </li>
                      ))
                    }
                  </ul>
                  <NavLink onClick={()=>setIsOpen(false)} to="bookings"
                           className="text-[18px] w-[150px] h-[50px] bg-[#2AA8FF] font-[500] text-[#FFFFFF] rounded-[12px] flex justify-center items-center">
                    My Bookings
                  </NavLink>
                </div>
              </nav>
            </>
        }
      </header>

  );
};

export default Navbar;
