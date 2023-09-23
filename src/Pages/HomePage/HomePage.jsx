// import Navbar from "../../Components/Hader/Navbar/Navbar";

import { useEffect, useState } from "react";
import Banner from "../../Components/Hader/Banner/Banner";
import Phones from "../../Components/Phones/Phones";

const HomePage = () => {

    const [phons, setPhones] = useState([])

    useEffect(() => {
        fetch('phone.json')
            .then(res => res.json())
            .then(data => setPhones(data))
    }, [])

    return (
        <div>
            <Banner></Banner>
            <Phones key={phons.id} phons={phons}></Phones>
        </div>
    );
};

export default HomePage;