/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box } from "../../components/box";

export default function Menu() {

    function createFoodList(array) {
        return array.map((obj, index) => (
            <div
                key={index}
                className="grid grid-cols-5 grid-rows-3 p-4"
            >
                <img
                    src={obj.url} alt={obj.name}
                    className="row-span-3 col-span-2 rounded-xl bg-cover bg-center md:col-span-2"
                />

                <h2 className="ml-4 font-extrabold underline underline-offset-8 col-start-4 row-start-2 col-span-2 md:text-2xl">
                    {obj.name}
                </h2>
            </div>
        ));
    }


    const foods = [
        { name: 'Rabada', url: 'https://assets.unileversolutions.com/recipes-v2/177433.jpg?imwidth=800' },
        { name: 'Rabada', url: 'https://assets.unileversolutions.com/recipes-v2/177433.jpg?imwidth=800' },
        { name: 'Objeto 3', url: 'https://assets.unileversolutions.com/recipes-v2/177433.jpg?imwidth=800' },
    ];



    const foodBox = createFoodList(foods)

    return (


        <main className="min-h-screen px-4 pb-8">
            <div className=" max-w-[1000px] m-auto">
                <div className="pt-8 mb-4">
                    <h1 className="text-2xl text-yellowButton text-center font-semibold md:text-3xl">
                        Sabores do Nordeste: Uma Viagem Culinária pelos Sabores Autênticos do Nordeste Brasileiro!
                    </h1>
                </div>

                <div className="bg-bgRed rounded drop-shadow-sm py-2">
                    {foodBox}
                </div>
            </div>

            <div className="md:flex md:justify-between md:w-[700px]  md:m-auto pt-8">
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

        </main>
    )
}