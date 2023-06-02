import React from "react";
import { Logo } from "../images/logo"
import { NavegationLinks } from "../navegationLinks";
import { SocialMedia } from "../socialMedia"

export function Footer() {
    return (
        <footer className="bg-bgRed pb-4">
            <nav className=" m-auto w-full max-w-[1000px] p-2 md:p-4 ">
                <div className="grid grid-cols-5 gap-2">
                    <div
                        className="h-16 md:h-32 col-span-3 row-span-1 md:col-span-2"
                    >
                        <Logo />
                    </div>
                    <div className="font-extrabold text-left mt-12 text-base col-span-2 md:col-start-4 md:text-xl ">
                        <NavegationLinks
                            ulStyle=""
                            liStyle="mt-4 md:mt-8"
                        />
                    </div>
                    <div className="col-span-3">
                        <SocialMedia
                            ulStyle="flex"
                            liStyle="h-8 w-8 mx-6"
                        />
                    </div>
                </div>
                <div className="h-1 w-full bg-white rounded-md mt-2 drop-shadow-lg" />
            </nav>
        </footer>
    )
}