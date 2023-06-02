import { Slider } from "./components/layout/slider";

import { homeImage, companyImage } from "./components/images/imagesSlides";
import { Box } from "./components/box";

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
        <div className="h-full w-full">
          <div className="h-full w-full flex">
            <div className="max-w-[1000px] bg-bgRed p-4 m-auto lg:rounded-xl">
              <h1 className=" text-yellowButton text-3xl font-bold">
                Musica legal e comida de qualidade
              </h1>
              <p className="py-2 text-justify font-semibold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, error placeat dolores aliquam cupiditate
                iusto modi totam! Odit, harum unde rem ratione consequatur dolorem ex repellendus maxime consectetur corporis.
                Quae! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum nulla possimus magni animi fs? Veritatis
                quasi velit labore mollitia quia ullam nulla alias. Placeat suscipit hic ratione, animi alias cum!
              </p>
              <div className="h-52">
                <Slider slide={companyImage} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="units"
        className="h-screen pt-20 md:pt-24"
      >
        <div className="h-full w-full flex">
          <div className="bg-red-900 max-w-[1000px] m-auto p-4 md:grid md:grid-cols-6 lg:rounded-xl">
            <div className="md:col-span-3 md:row-start-2">
              <p className="text-justify font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima deserunt quos ea pariatur error velit ab, delectus eveniet voluptate facilis cupiditate labore, repudiandae corrupti libero rem et inventore eligendi fugiat.
              </p>
            </div>
            <div className="my-4 md:col-start-5 md:col-span-3 md:row-span-3">
              <Box
                h3Text="Faça sua"
                h2Text="Reserva"
                pText="Fazendo sua reserva você garante seu lugar!"
                bntText="Fazer reserva"
              />
            </div>
            <div className="md:col-span-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7857.10333746256!2d-46.44541228438907!3d-23.898654664894877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce17571de9b87b%3A0x46a9a7b5bfac5ab4!2sCabe%C3%A7a&#39;s%20Bar!5e0!3m2!1spt-BR!2sbr!4v1685739443524!5m2!1spt-BR!2sbr" loading="lazy"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="menu"
        className="h-screen pt-20 md:pt-24"
      >
        <div className="bg-red-100 h-full w-full">
          f
        </div>
      </section>

      <section
        id="contacts"
        className="h-screen pt-20 md:pt-24"
      >
        contacts
      </section>
    </main>
  )
}
