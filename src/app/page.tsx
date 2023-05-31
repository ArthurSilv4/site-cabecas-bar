import { Slider } from "./components/layout/slider";

export default function Home() {

  

  return (
    <main className="">
      <section
        id="home"
        className="h-screen pt-20 md:pt-24"
      >
        <Slider/>
      </section>

      <section
        id="company"
        className="h-screen pt-52"
      >
        company
      </section>

      <section
        id="units"
        className="h-screen pt-52"
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
