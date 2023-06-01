'use client'

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Logo } from "../logo";
import { NavegationLinks } from "../navegationLinks"

export function NavBar() {

    const [navBar, setNavBar] = useState(false);

    return (
        <header
            className="bg-bgRed w-full fixed flex z-10"
        >
            <nav className="md:flex md:justify-between md:items-center md:gap-2 m-auto w-full max-w-[1000px]">
                <div className="p-2 md:p-4">
                    <div className="flex justify-between items-center md:block">
                        <div className="h-16">
                            <Logo />
                        </div>
                        <div className="w-16 md:hidden">
                            <button
                                className=""
                                onClick={() => setNavBar(!navBar)}

                            >
                                {navBar ? (
                                    <AiOutlineClose size={30} color="white" />
                                ) : (
                                    <AiOutlineMenu size={30} color='white' />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className={`bg-bgRed p-2 md:block ${navBar ? 'block' : 'hidden'}`}
                >
                    <div
                        className="bg-white h-1 w-full rounded-sm md:hidden"
                    />

                    <div className="text-xl font-extrabold text-center  md:text-base">
                        <NavegationLinks
                            ulStyle="py-4 md:flex md:py-0"
                            liStyle="pt-4 md:pt-0 md:px-4"
                        />
                    </div>
                </div>
            </nav>
        </header>
    )
}