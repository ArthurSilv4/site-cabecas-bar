import React from "react";

import { Box } from "../../components/box"

export default function Units() {
    return (
        <main className="min-h-screen text-black flex">
            <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full max-w-[1000px] pt-12 px-2 md:flex md:justify-between">

                    <div className="h-64 md:h-80 md:w-[600px] md:m-auto">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1754.9670717000652!2d-46.44633124436522!3d-23.899156352910744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce17571de9b87b%3A0x46a9a7b5bfac5ab4!2sCabe%C3%A7a&#39;s%20Bar!5e0!3m2!1spt-BR!2sbr!4v1685919605853!5m2!1spt-BR!2sbr" loading="lazy" className="h-full w-full" />
                    </div>

                    <div className="h-full w-full md:ml-6">
                        <h1 className="mt-2 text-yellowButton text-3xl md:text-center font-semibold">
                            O espaço ideal para reunir-se com a família e amigos.
                        </h1>
                        <p className="mt-2 text-justify font-extrabold md:text-xl">
                            O Cabeças Bar está situado na vibrante comunidade da Vila esperança, trazendo o autêntico sabor do Nordeste brasileiro para os moradores locais e visitantes que desejam explorar uma atmosfera autêntica e acolhedora. Apesar de estar afastado do centro da cidade, o bar é um destino imperdível para aqueles que procuram uma experiência gastronômica única, com pratos típicos e bebidas deliciosas, em um ambiente descontraído e verdadeiramente autêntico.
                        </p>
                    </div>

                </div>

                <div className="md:flex md:justify-between md:w-[700px]  md:m-auto">
                        <div className="my-12 ">
                            <Box
                                h3Text="Faça sua"
                                h2Text="Reserva"
                                pText="Fazendo sua reserva online você garante o seu lugar com segurança!"
                                bntText="Fazer reserva"
                            />
                        </div>
                        <div className="my-12 ">
                            <Box
                                h3Text="Peça pelo nosso"
                                h2Text="Delivery"
                                pText="Coma o melhor do Cabeças bar em qualquer lugar, peça no conforto da sua casa!"
                                bntText="Fazer pedido"
                            />
                        </div>
                    </div>
            </div>




        </main>
    )
}