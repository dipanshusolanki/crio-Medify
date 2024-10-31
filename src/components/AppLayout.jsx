import HeaderTile from "./HeaderTile/HeaderTile.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./Footer/Footer.jsx";
import Download from "./Download/Download.jsx";

const AppLayout = () => {
    return (
        <main className="max-md:w-screen max-md:overflow-hidden">
            <HeaderTile/>
            <Navbar/>
            <Outlet/>
            <Download/>
            <Footer/>
        </main>
    )
}
export default AppLayout
