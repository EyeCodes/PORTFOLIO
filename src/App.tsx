
import { BannerDesign } from "./components/design/BannerDesign";
import { About } from "./components/layout/About";
import { Contact } from "./components/layout/Contact";
import { Profile } from "./components/layout/Profile";
import { Project } from "./components/layout/Project";
import { Skill } from "./components/layout/Skill";


export default function App() {

  return (
    <>
      <main className="h-full lg:h-screen w-full overflow-clip bg-linear-to-r from-slate-700 to-slate-800 flex justify-center relative py-2 md:overflow-clip">
        <BannerDesign />
      <div className=" top-0 m-0 flex flex-col justify-evenly z-9">
        <Profile />
        <div className="h-full flex flex-col lg:flex-row justify-center items-center gap-5 p-5" >
        <About />
        <Skill />
        <Project />
        </div>
        <div className="h-full flex gap-5">
        <Contact />
        </div>
      </div>
        <BannerDesign />

      </main>
    </>
  )
}

