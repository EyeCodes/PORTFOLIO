import { useState, type ReactNode } from "react";
import {  Menu  } from 'lucide-react';

interface ListNavProps {
  children: ReactNode;
}
const ListNav = ({ children }: ListNavProps) => (
  <li className="hover:cursor-pointer hover:text-blue-400 text-white">
    {children}
  </li>
);


export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-15 w-full fixed top-0 left-0 z-99 bg-linear-to-r from-slate-700 to-slate-800  p-2 pl-5 pr-5 flex flex-row justify-between items-center">
        <div className="h-full p-2 font-bold text-xl text-blue-400">Kennith Khember Villegas</div>
        <button className="md:hidden hover:scale-1! rounded-md p-2" onClick={() => setIsOpen((prev) => !prev)}><Menu /></button>
        <nav className={isOpen ? 'h-fit bg-white flex absolute md:relative top-0 right-0 mt-15 md:mt-0 z-99' : 'hidden md:flex'}>
          <ul className={isOpen ? "h-full w-50 md:w-full p-2 flex flex-col md:flex-row gap-5 border border-blue-500 md:border-none" : "md:h-full w-fit p-2 flex gap-5"}>
            <ListNav><a href="#hero">Home</a></ListNav>
            <ListNav><a href="#about">About</a></ListNav>
            <ListNav><a href="#projects">Projects</a></ListNav>
            <ListNav><a href="#skills">Skills</a></ListNav>
            <ListNav><a href="#education">Education</a></ListNav>
            <ListNav><a href="#contact">Contact</a></ListNav>
          </ul>
        </nav>
      </header>
  )
}