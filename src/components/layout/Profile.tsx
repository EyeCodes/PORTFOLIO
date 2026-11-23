import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { ArrowDownToLine  } from 'lucide-react';

export const Profile = () => {
  return(
    <section className="h-fit lg:h-[40dvh] w-full p-2 py-5 rounded-md flex flex-col justify-center items-center">
      <div className="h-full w-full rounded-md relative flex flex-col lg:flex-row justify-center items-center gap-10">
        <img src="/profile/profile.jpg" className="h-40 w-40 rounded-full object-fill " /> 
        <div className=" flex flex-col *:text-center lg:*:text-left ">
          <h1 className=" text-nowrap text-[5vw] lg:text-[2.5vw] font-[1000] text-slate-200 uppercase">Kennith Khember A. Villegas</h1>
          <h2 className="text-[4vw] lg:text-[2.2vw] font-[750] text-green-400">COMPUTER SCIENCE</h2>
          <h3 className="text-[3vw] lg:text-[1.3vw] font-semibold text-red-500">WEB DEVELOPER</h3>
        </div>
          <nav className="w-fit flex flex-col py-2 lg:p-0 justify-center items-center gap-2">
            <a href="/KV-resume.pdf" download={"ken-vill-resume.pdf"} className="btn w-fit text-nowrap bg-none flex gap-2 border border-green-500 rounded-md p-2 text-green-500 font-semibold hover:bg-green-400 hover:text-white">Download Resume <ArrowDownToLine /></a>
            <div  className="w-fit justify-center p-4 flex gap-10 *:text-2xl *:text-blue-500">
              <a href="https://github.com/EyeCodes" target="blank"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/villegas-kennith-khember-399976414?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="blank"><FaLinkedin /></a>
              <a href="mailto:khember@gmail.com" ><FaEnvelope /></a>
            </div>
          </nav>
      </div>
    </section>
  )
}