import type { ReactNode } from "react";
import { FaGithub, FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';

interface ListNavProps {
  children: ReactNode;
}
const ListNav = ({ children }: ListNavProps) => (
  <li className="hover:cursor-pointer hover:text-blue-400">
    {children}
  </li>
);

const year = new Date().getFullYear();

export const Footer: React.FC = ()=>{
  return(
    <footer className="w-full p-4 bg-blue-500 flex flex-col md:flex-row gap-2 [&>div]:w-[25%] [&>div>h1]:text-center">
        <div className="md:w-[20%]! w-full! p-2 flex flex-col *:text-white  gap-2 justify-evenly">
          <h1 className="text-xl font-extrabold text-left!">Kennith Khember Villegas</h1>
          <p className="text-justify">A Web Developer specializing in backend Development using Laravel. Driven to Learn and find Solution with the assistance of AI.</p>
          <span className="text-slate-300 text-[.8rem]">© {year} Kennith Khember Villegas. All rights reserved.</span>
        </div>

        <div className="py-2">
          <h1 className="text-xl font-bold text-white">Navigation</h1>
          <nav className="flex justify-center">
            <ul className="flex flex-col gap-2 *:text-sm! *:text-white p-4">
              <ListNav><a href="#hero">Home</a></ListNav>
              <ListNav><a href="#about">About</a></ListNav>
              <ListNav><a href="#projects">Projects</a></ListNav>
              <ListNav><a href="#skills">Skills</a></ListNav>
              <ListNav><a href="#education">Education</a></ListNav>
              <ListNav><a href="#contact">Contact</a></ListNav>
            </ul>
          </nav>
        </div>

        <div className="p-2">
          <h1 className="text-xl font-bold text-white">Socials</h1>
          <nav className="flex justify-center">
            <ul className="flex flex-col gap-2 *:text-ms! *:text-white p-4">
                <a href="https://github.com/EyeCodes" target="blank"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/villegas-kennith-khember-399976414?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="blank"><FaLinkedin /></a>
            </ul>
          </nav>
        </div>

        <div className="p-2 ">
          <h1 className="text-xl font-bold text-white">Contacts</h1>
          <nav className="flex justify-right md:justify-center">
            <ul className="flex flex-col gap-2 *:text-ms! p-4 *:text-white *:flex *:justify-start *:items-center *:gap-5 ">
              <li><FaEnvelope /> khembervill@gmail.com</li>
              <li><FaPhone className="text-green" /> +63 975 3066 898</li>
            </ul>
          </nav>
        </div>
      </footer>
  )
}