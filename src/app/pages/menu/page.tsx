/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box } from "../../components/box";

export default function Menu() {

    function createFoodList(array: any[]) {
        return array.map((obj, index) => (
            <div
                key={index}
                className="grid grid-cols-7 grid-rows-3 p-4"
            >
                <img
                    src={obj.url} alt={obj.name}
                    className="row-span-3 col-span-2 row-start-1  rounded-xl bg-cover bg-center md:col-span-2"
                />

                <h2 className=" font-extrabold underline underline-offset-8 col-start-4 row-start-2 col-span-4 text-xs md:text-2xl">
                    {obj.name}
                </h2>
            </div>
        ));
    }


    const foods = [
        { name: 'Rabada', url: 'https://assets.unileversolutions.com/recipes-v2/177433.jpg?imwidth=800' },
        { name: 'Feijoada', url: 'https://www.divinho.com.br/blog/wp-content/uploads/2021/03/Feijoada_01.jpg' },
        { name: 'Buchada', url: 'https://www.sabornamesa.com.br/media/k2/items/cache/973d452191c64a038927e95436dac7d2_XL.jpg' },
        { name: 'Sarapatel', url: 'https://i0.wp.com/xtudoreceitas.com/wp-content/uploads/Sarapatel-Tipico-Nordestino.jpg?w=650&ssl=1' },
        { name: 'Dobradinha', url: 'https://hqdavida.com.br/storage/2023/02/Aprenda-a-fazer-a-melhor-dobradinha-com-bacon-e-feijao-branco-que-ja-experimentou.jpeg' },
        { name: 'File de frando aparmediana', url: 'https://receitinhas.com.br/wp-content/uploads/2022/10/File-de-frango-a-parmegiana-Receita-de-mae2-730x365.png' },
    ];



    const foodBox = createFoodList(foods)

    return (


        <main className="min-h-screen p-2">
            <div className="w-full h-full max-w-[700px] m-auto">
                <div className="pt-8 pb-4">
                    <h1 className="text-2xl text-yellowButton text-center font-semibold md:text-3xl">
                        Sabores do Nordeste: Uma Viagem Culinária pelos Sabores Autênticos do Nordeste Brasileiro!
                    </h1>
                </div>

                <div className="bg-bgRed w-full h-full rounded-lg drop-shadow-sm py-2">
                    <div className="g">
                        {foodBox}
                    </div>

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