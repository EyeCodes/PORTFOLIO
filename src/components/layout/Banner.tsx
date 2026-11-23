import { ChevronRight, UserRoundPen, ArrowDownToLine  } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { BannerDesign } from '../design/BannerDesign';

export const Banner: React.FC = () =>{

  return (
    <div  id="hero">
        <BannerDesign />
          <div className="h-60 w-full p-5 grid justify-center items-center z-20">
              <div className="flex flex-col justify-center items-center gap-2 p-2">
                <h1 className="text-4xl text-blue-400 font-extrabold text-center">Kennith Khember Villegas</h1>
                <h2 className="text-blue-400 text-center">Hi, I'm Ken. A web developer specializing in backend engineering using Laravel.</h2>
              </div>
              <div className="w-full flex justify-center items-center mt-5 mb-5">
                <nav className="w-60 md:w-85 flex flex-wrap gap-5 justify-center items-center">
                  <a className="btn w-fit bg-blue-500 flex rounded-md p-2 text-white font-semibold" href="#projects">See My Work <ChevronRight /></a>
                  <a href="#contact" className="btn w-fit bg-none flex gap-2 border border-amber-500 rounded-md p-2 text-amber-500 font-semibold hover:bg-amber-400 hover:text-white">Contact Me <UserRoundPen /></a>
                  <a href="/KV-resume.pdf" download={"ken-vill-resume.pdf"} className="btn bg-none flex gap-2 border border-green-500 rounded-md p-2 text-green-500 font-semibold hover:bg-green-400 hover:text-white">Download Resume <ArrowDownToLine /></a>
                </nav>
              </div>
                <nav className="w-full justify-center p-4 flex gap-10 *:text-2xl *:text-blue-500">
                  <a href="https://github.com/EyeCodes" target="blank"><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/villegas-kennith-khember-399976414?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="blank"><FaLinkedin /></a>
                  <a href="mailto:khember@gmail.com" ><FaEnvelope /></a>
                </nav>
          </div>
        </div>
  )

}