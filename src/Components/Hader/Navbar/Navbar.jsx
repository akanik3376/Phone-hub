import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="container mx-auto flex justify-between mt-3 py-3 items-center shadow-lg mb-10">
            <div>
                <h1 className="text-2xl font-bold">PhoneHub</h1>
            </div>
            <div>
                <ul className="text-lg flex gap-5">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-purple-800 underline font-semibold" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/bookmark"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-purple-800 underline font-semibold" : ""
                            }
                        >
                            BookMark
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-purple-800 underline font-semibold" : ""
                            }
                        >
                            Login
                        </NavLink>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;