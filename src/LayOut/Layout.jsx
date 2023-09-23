import { Outlet } from "react-router-dom";
import Navbar from "../Components/Hader/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;