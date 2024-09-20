import logo from "../../assets/medify_logo.svg";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between px-8 py-[1.5rem] items-center">
      <img src={logo} alt="logo" className="w-[92px] h-[27px]" />
      <div className="flex gap-[40px] items-center font-Poppins">
        <ul className="flex gap-[40px] font-[400] leading-[21px] text-[14px] text-[#102851]">
          <li>
            <a href="#">Find Doctors</a>
          </li>
          <li>
            <a href="#">Hospitals</a>
          </li>
          <li>
            <a href="#">Medicines</a>
          </li>
          <li>
            <a href="#">Surgeries</a>
          </li>
          <li>
            <a href="#">Software for Provider</a>
          </li>
          <li>
            <a href="#">Facilities</a>
          </li>
        </ul>
        <button className="w-[130px] h-[40px] bg-[#2AA8FF] font-[500] text-[#FFFFFF] rounded-[8px]">
          My Bookings
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
