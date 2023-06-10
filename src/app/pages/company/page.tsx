/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Company() {
    return (
        <main className="min-h-screen text-black ">
            <div className="w-full max-w-[1000px] p-2 m-auto my-16">
                <div className="">
                    <h1 className="text-yellowButton text-3xl font-semibold">
                        Música e comida de qualidade
                    </h1>

                    <p className="mt-2 text-justify font-extrabold">
                        O Cabeças Bar é um local modesto que busca trazer o sabor autêntico do Nordeste brasileiro em um ambiente descontraído, com uma decoração minimalista. O foco principal está nos pratos e nas bebidas oferecidos aos clientes.

                        No cardápio do Cabeças Bar, você encontrará uma seleção de pratos típicos do Nordeste, como a famosa rabada, carne seca, buchada, feijoada, entre outros. Os pratos são preparados com ingredientes frescos e seguindo as receitas tradicionais da região, garantindo sabores marcantes e genuínos.

                        O bar do Cabeças Bar oferece uma variedade de bebidas, incluindo cervejas geladas, sucos e, é claro, a cachaça, que é uma das bebidas mais apreciadas no Nordeste.

                        A atmosfera no Cabeças Bar é amigável e despretensiosa, com um espaço acolhedor e uma equipe simpática pronta para atender os clientes. O objetivo é proporcionar um ambiente relaxante, onde as pessoas possam desfrutar de boa comida, bebida e, se quiserem, até mesmo bater um papo descontraído com os amigos.

                        Embora a decoração seja simples, o Cabeças Bar valoriza a cultura nordestina através da música ambiente, que pode apresentar uma seleção de forró, xote e outros ritmos característicos da região.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row">
                    <div className="mt-12 h-60 w-64 m-auto">
                        <img src="https://static.ndmais.com.br/2021/10/bar-800x600.jpg" alt="Imagem ilusreariva bar"  className="h-full w-full bg-cover bg-center drop-shadow-2xl"/>
                    </div>
                    <div className="mt-12 h-60 w-64 m-auto md:mx-8">
                        <img src="https://img.freepik.com/vetores-gratis/placa-de-neon-para-pub-ou-restaurante_23-2149086446.jpg?w=826&t=st=1686436242~exp=1686436842~hmac=73d6b70081c9b7b75503748638480acb5c0ea5126fe94c5c6d91f3ae08f08eb4" alt="Imagem ilusreariva bar e restaurante"  className="h-full w-full bg-cover bg-center drop-shadow-2xl"/>
                    </div>
                    <div className="mt-12 h-60 w-64 m-auto">
                        <img src="https://i.pinimg.com/564x/af/60/f8/af60f8a2e6a25e2b358282a4a7cc17ea.jpg" alt="Imagem ilusreariva nordeste"  className="h-full w-full bg-cover bg-center drop-shadow-2xl"/>
                    </div>
                </div>
            </div>
        </main>
    )
}