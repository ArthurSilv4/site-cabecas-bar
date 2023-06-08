import { SocialMedia } from "@/app/components/socialMedia";
import React from "react";

export default function Contacts() {
    return (
        <main className="min-h-screen flex">
            <div className="max-w-[1000px] py-8 m-auto">
                <div className="min-w-[300px] min-h-[500px] mx-4 p-4 rounded-xl m-auto bg-bgRed drop-shadow-2xl">
                    <div className="grid grid-rows-6">

                        <div className="col-span-3 h-[100px] flex justify-center items-center">
                            <h2 className="text-yellowButton text-2xl text-center font-semibold md:text-3xl">
                                ONDE ESTAMOS
                            </h2>
                        </div>

                        <div className="col-span-3 ">
                            <p className="text-base text-center font-extrabold md:text-xl">
                                Av. Principal, 2821 - Vila Esperança, Cubatão - SP
                            </p>
                        </div>


                        <div className="col-span-3 flex justify-center items-center">
                            <h2 className="text-yellowButton text-2xl text-center font-semibold md:text-3xl">
                                Horário de funcionamento
                            </h2>
                        </div>

                        <div className="col-span-3">
                            <p className="text-base text-center font-extrabold md:text-xl">
                                Quarta a Domingo das 11:30 às 22:00
                            </p>
                        </div>


                        <div className="col-span-3 flex justify-center items-center">
                            <h2 className="text-yellowButton text-2xl text-center font-semibold md:text-3xl">
                                redes sociais
                            </h2>
                        </div>

                        <div className="flex justify-center col-span-3">
                            <SocialMedia
                                ulStyle="flex"
                                liStyle="h-12 mx-6 md:h-16"
                            />
                        </div>
                    </div>


                </div>
            </div>

        </main>
    )
}