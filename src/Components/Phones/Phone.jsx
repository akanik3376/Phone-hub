/* eslint-disable react/prop-types */

import { Link, useLoaderData } from "react-router-dom";

const Phone = ({ phone }) => {
    // console.log(phone)
    const { id, image, phone_name, brand_name, rating, price } = phone;


    const phoneId = useLoaderData()
    // console.log(phoneId)

    return (
        <div>
            <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        className=" w-full object-cover"
                    />
                </div>
                <div className="p-3">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="block font-sans text-base font-medium leading-relaxed  antialiased">
                            {phone_name}
                        </p>
                        <p className="block font-sans text-base font-medium leading-relaxed  antialiased">
                            ${price}
                        </p>

                    </div>
                    <div className="flex justify-between">
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            ${brand_name}
                        </p>
                        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                            {rating}
                        </p>
                    </div>
                </div>
                <div className="p-6 pt-0">
                    <Link to={`/phone/${id}`}>
                        <button
                            className="block w-full select-none rounded-lg bg-blue-700 text-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Show Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Phone;