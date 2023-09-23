// import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const SinglePhone = () => {

    const [phone, setPhone] = useState()

    const { id } = useParams()
    // console.log(id)

    const singlePhone = useLoaderData()
    // console.log(singlePhone)

    useEffect(() => {
        const findPhone = singlePhone.find(phones => phones.id === id)
        setPhone(findPhone)
        // console.log(findPhone)

    }, [id, phone])
    console.log(phone)



    return (

        <div>

            <img className="w-80" src={phone.image} alt="" />
        </div>

    );
};

export default SinglePhone;