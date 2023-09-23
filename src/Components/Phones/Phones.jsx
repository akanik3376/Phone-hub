/* eslint-disable react/prop-types */
import Phone from "./Phone";

const Phones = ({ phons }) => {
    // console.log(phons)

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mt-10 mb-5">All Phone is hare</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" >
                {phons?.map(phone => <Phone key={phone.id} phone={phone}></Phone>)}
            </div>
        </div>
    );
};

export default Phones;