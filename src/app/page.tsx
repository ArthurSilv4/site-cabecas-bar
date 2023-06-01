import { Slider } from "./components/layout/slider";

import { homeImage, companyImage } from "./components/imagesSlides";

export default function Home() {

  return (
    <main className="">
      <section
        id="home"
        className="h-screen pt-20 md:pt-24"
      >
        <Slider
          slide={homeImage}
        />
      </section>

      <section
        id="company"
        className="h-screen pt-20 md:pt-24"
      >
        <div className="h-full w-full flex">
          <div className="m-auto max-w-[1000px] bg-red-900 p-4">
            <div className="h-[650px] p-2 grid grid-rows-6 grid-flow-col">
              <h1 className=" text-2xl text-yellow-500 font-bold">
                Musica legal e comida de qualidade
              </h1>
              <p className="text-justify font-semibold row-start-2 row-span-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, error placeat dolores aliquam cupiditate
                iusto modi totam! Odit, harum unde rem ratione consequatur dolorem ex repellendus maxime consectetur corporis.
                Quae! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum nulla possimus magni animi fs? Veritatis
                quasi velit labore mollitia quia ullam nulla alias. Placeat suscipit hic ratione, animi alias cum!
              </p>
              <div className="h-[200px] row-start-5 md:row-start-4 md:h-[300px]">
                <Slider slide={companyImage} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="units"
        className="h-screen pt-52 text-black"
      >
        units
      </section>

      <section
        id="menu"
        className="h-screen pt-52"
      >
        menu
      </section>

      <section
        id="contacts"
        className="h-screen pt-52"
      >
        contacts
      </section>
    </main>
  )
}
