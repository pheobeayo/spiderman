import React from "react";
import logo from "../../assets/logo.svg"






const Navbar = () => {


    return (



        <nav class="bg-white">
            <div>
                <img src={logo} alt='logo' />
                <form>
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Find your Star" required />
                        <button type="submit" class="text-white absolute end-28 bottom-2.5 bg-[#FF4081] hover:bg-[#009688] focus:ring-4 focus:outline-none focus:ring-[#009688] font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#009688] dark:hover:bg-[#009688] dark:focus:ring-[#009688]">Log in</button>
                        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-[#FF4081] hover:bg-[#009688] focus:ring-4 focus:outline-none focus:ring-[#009688] font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#009688] dark:hover:bg-[#009688] dark:focus:ring-[#009688]">Sign up</button>
                    </div>
                </form>
            </div>
        </nav>





    );
};

export default Navbar;