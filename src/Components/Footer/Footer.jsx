
const Footer = () => {
    return (
        <div className="">
            <footer className="w-full bg-white p-8 mt-10 flex justify-center">
                <div>
                    <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">

                        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                            <li>
                                <a
                                    href="#"
                                    className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                                >
                                    License
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                                >
                                    Contribute
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-8 border-blue-gray-50" />
                    <p className="block text-center font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        © 2023 Material Tailwind
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;