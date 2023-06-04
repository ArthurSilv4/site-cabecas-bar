/* eslint-disable @next/next/no-img-element */
import { Slider } from "./components/layout/slider";
import { homeImage } from "./components/images/imagesSlides";
import { Box } from "./components/box";

import Link from "next/link";

export default function Home() {

  return (
    <main className="text-black">
      <section className=" w-screen h-screen max-h-[600px] md:max-h-[800px]">
        <Slider
          slide={homeImage}
        />
      </section>
      <section className="h-full w-full flex flex-col px-2">
        <div className="max-w-[1000px] m-auto">
          <h1 className="text-3xl text-center text-yellowButton font-semibold mt-6">
            O BAR E RESTAURANTE
          </h1>
          <p className="text-center font-extrabold my-7">
            Originalmente fundado em [data] de 2008, por uma família tradicional nordestina, o restaurante Cabeças bar é capaz de proporcionar uma excelente experiência para quem deseja compartilhar momentos agradáveis ao lado da família e dos amigos.
          </p>
          <div className="flex">
            <button className="bg-bgRed hover:bg-red-800 text-white font-bold m-auto p-2 rounded-2xl drop-shadow-2xl">
              <Link href={"/pages/company"}>
                Saiba Mais
              </Link>
            </button>
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
      </section>
    </main>
  )
}
