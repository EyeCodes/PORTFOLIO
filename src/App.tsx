import type { ReactNode } from "react";
import { ChevronRight, UserRoundPen, ArrowDownToLine, SquareArrowOutUpRight, Send  } from 'lucide-react';
import { SiTailwindcss, SiLaravel, SiJavascript, SiChatbot, SiLivewire, SiMariadb, SiReact, SiFirebase, SiUbuntu, SiDocker, SiPostgresql } from 'react-icons/si';
import { FaGithub, FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';
interface ListNavProps {
  children: ReactNode;
}

const ListNav = ({ children }: ListNavProps) => (
  <li className="font-semibold hover:cursor-pointer hover:text-blue-500">
    {children}
  </li>
);


function App() {
  
  return (
    <>
      <header className="h-15 w-full fixed top-0 left-0 bg-white p-2 pl-5 pr-5 flex flex-row justify-between border-b border-blue-500 items-center">
        <div className="h-full p-2 font-bold text-xl text-blue-500">Kennith Khember Villegas</div>
        <nav>
          <ul className="h-full w-fit p-2 flex flex-row gap-5">
            <ListNav><a href="#hero">Home</a></ListNav>
            <ListNav><a href="#about">About</a></ListNav>
            <ListNav><a href="#projects">Projects</a></ListNav>
            <ListNav><a href="#skills">Skills</a></ListNav>
            <ListNav><a href="#education">Education</a></ListNav>
            <ListNav><a href="#contact">Contact</a></ListNav>
          </ul>
        </nav>
      </header>

      <main className="grid justify-center p-5 gap-20">
        <div className="h-[90vh] w-full mt-15 p-5 flex justify-center items-center" id="hero">
          <div className="h-60 w-full p-5 grid justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-2 p-2">
                <h1 className="text-3xl font-extrabold">Kennith Khember Villegas</h1>
                <h2 className="text-blue-400">Hi, I'm Ken. A web developer specializing in backend engineering using Laravel.</h2>
              </div>
              
              <div className="w-full flex justify-center items-center mt-5 mb-5">
                <nav className="w-80 flex flex-wrap gap-5 justify-center items-center">
                  <a className="btn w-fit bg-blue-500 flex rounded-md p-2 text-white font-semibold" href="#skills">See My Work <ChevronRight /></a>
                  <a href="#contact" className="btn w-fit bg-none flex gap-2 border border-amber-500 rounded-md p-2 text-amber-500 font-semibold">Contact Me <UserRoundPen /></a>
                  <a href="/KV-resume.pdf" download={"ken-vill-resume.pdf"} className="btn bg-none flex gap-2 border border-green-500 rounded-md p-2 text-green-500 font-semibold">Download Resume <ArrowDownToLine /></a>
                </nav>
              </div>
                <nav className="w-full justify-center p-4 flex gap-10 *:text-2xl">
                  <a href="https://github.com/EyeCodes" target="blank"><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/villegas-kennith-khember-399976414?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="blank"><FaLinkedin /></a>
                  <a href="mailto:khember@gmail.com" ><FaEnvelope /></a>
                </nav>
          </div>
        </div>

        <section id="about"></section>
        <section className="min-h-[80dvh] h-fit w-[90vw] border-2 border-blue-500 rounded-2xl">
          <div className="p-10">
            <div className="flex flex-col">
              <div className="flex flex-col gap-2 pb-2 justify-center items-center">
                <img src="/profile/profile.jpg" className="h-50 w-50 border-5 border-green-500 rounded-full object-cover p-2" /> 
                <h1 className="font-bold text-xl"><span className="text-green-600">COMPUTER SCIENCE </span>| WEB DEVELOPER</h1>
              </div>
              <div className="p-2">
                <h1 className="text-2xl font-bold text-blue-500 pb-2">ABOUT ME</h1>
                <p className="text-justify">I am a web developer who loves diving into backend engineering. I primarily build with Laravel, paired with React and Tailwind for the frontend. I am deeply passionate about learning new concepts and translating them into clean, functional logic. Whether I am writing code myself or using AI as an assistive tool, my focus is always on understanding exactly how the underlying systems work. Problem-solving can be frustrating, but the satisfaction of finally cracking a tough bug is exactly why I enjoy this field. Beyond writing code, I have guided projects from start to finish as a Full-Stack Developer, Team Lead, and Code Reviewer, ensuring our team stays coordinated and our code stays clean. 

                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects"></section>
        <section className="w-full grid gap-2" >
          <h1 className="text-2xl font-bold text-blue-500">PROJECTS</h1>

          <div className="w-[90vw] grid gap-4 border-2 border-blue-500 rounded-xl p-2">
            <div className="bg-blue-400 rounded-md p-5 grid gap-2">
              <h1 className="text-white font-bold text-2xl">Rsafety</h1>
              <p className="bg-white rounded-md text-blue-500 p-2">A hackathon project based on SDG-16 promoting peace and unity. A web service where users are able to post and share their experiences, join diverse group of communities, check their area for bad activities that happened, read the laws about crime and violence and contact professional help.</p>
              <div className="flex justify-evenly *:text-white p-2 *:h-10 *:w-10 gap-4">
                <SiLaravel /> <SiTailwindcss /> <SiJavascript /> <SiMariadb /> <SiChatbot />
              </div>
            </div>

            <div className="bg-blue-400 rounded-md p-5 grid gap-2">
              <h1 className="text-white font-bold text-2xl">TaskNotes</h1>
              <p className="bg-white rounded-md text-blue-500 p-2">A simple project where you can create a task with title, description, and due date. Users will be able to see their current pending task, completed task and create/update/delete task.</p>
              <div className="flex justify-evenly *:text-white p-2 *:h-10 *:w-10 gap-4">
                <SiLaravel /> <SiTailwindcss /> <SiLivewire /> <SiMariadb />
              </div>
            </div>

            <div className="bg-blue-400 rounded-md p-5 grid gap-2">
              <h1 className="text-white font-bold text-2xl">Suggestion Box</h1>
              <p className="bg-white rounded-md text-blue-500 p-2">Account free suggestion box.Users can create a suggestion box set tite, description, set color and add image in front of the box. Participant users will only have to search for the box name to send their suggestion/letter.</p>
                <nav className="w-full flex justify-end">
                  <a href="https://suggestion-box-4d492.web.app/" className="w-fit p-2 bg-green-400 text-white font-bold rounded-md flex flex-row flex-nowrap gap-2" target="blank">Visit Project <SquareArrowOutUpRight /> </a>
                </nav>
              <div className="flex justify-evenly *:text-white p-2 *:h-10 *:w-10 gap-4">
                <SiReact /> <SiTailwindcss /> <SiFirebase />
              </div>
            </div>

            <div className="bg-blue-400 rounded-md p-5 grid gap-2">
              <h1 className="text-white font-bold text-2xl">Inventory Management System</h1>
              <p className="bg-white rounded-md text-blue-500 p-2">Full-Stack Development of a Inventory System, CRUD of items and forms, download forms. Used CLI Ubuntu and CLI docker to deploy system locally while saving performance usage.</p>
              <div className="flex justify-evenly *:text-white p-2 *:h-10 *:w-10 gap-4">
                <SiLaravel /> <SiTailwindcss /> <SiJavascript /> <SiLivewire /> <SiPostgresql /> <SiUbuntu /> <SiDocker />
              </div>
            </div>

          </div>
        </section>

        <section id="skills"></section>
        <section className="w-full grid gap-2" >
          <h1 className="text-2xl font-bold text-blue-500">SKILLS</h1>

          <div className="w-[90vw] flex flex-wrap md:flex-nowrap gap-4 border-2 border-blue-500 rounded-xl p-2">

            <div className="w-full bg-blue-500 flex flex-col rounded-md items-center ">
              <h1 className="font-bold text-2xl text-white p-4">Frontend</h1>
              <ul className="*:text-md *:text-white *:text-center *:p-2">
                <li>React</li>
                <li>Javascript</li>
                <li>Tailwind CSS</li>
                <li>HTML & CSS</li>
              </ul>
            </div>

            <div className="w-full border-2 border-blue-500 flex flex-col rounded-md items-center ">
              <h1 className="font-bold text-2xl text-blue-500 p-4">Backend</h1>
              <ul className="*:text-md *:text-blue-500 *:text-center *:p-2">
                <li>Laravel</li>
                <li>PHP</li>
                <li>Firebase</li>
              </ul>
            </div>

            <div className="w-full bg-blue-500 flex flex-col rounded-md items-center ">
              <h1 className="font-bold text-2xl text-white p-4">Database</h1>
              <ul className="*:text-md *:text-white *:text-center *:p-2">
                <li>MariaDB</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
              </ul>
            </div>

            <div className="w-full border-2 border-blue-500 flex flex-col rounded-md items-center ">
              <h1 className="font-bold text-2xl text-blue-500 p-4">Tools</h1>
              <ul className="*:text-md *:text-blue-500 *:text-center *:p-2">
                <li>Docker</li>
                <li>Git</li>
                <li>n8n</li>
              </ul>
            </div>

          </div>
        </section>

        <section id="education"></section>
        <section className="w-full grid gap-2" >
          <h1 className="text-2xl font-bold text-blue-500">EDUCATION</h1>
          <div className="w-[90vw] flex flex-wrap md:flex-nowrap gap-4 border-2 border-blue-500  rounded-xl p-2">
            <div className="w-full bg-blue-500 flex flex-col rounded-md items-center p-2">
              <h1 className="font-bold text-2xl text-white p-1">Negros Oriental State University - 2026</h1>
              <h2 className="text-white">Computer Science</h2>
            </div>
          </div>
        </section>

        <section id="contact"></section>
          <section className="w-full grid gap-2 justify-center" >
          <h1 className="text-2xl font-bold text-blue-500">CONTACT</h1>
          
          <div className="w-[90vw] flex flex-wrap flex-col md:flex-nowrap gap-4 rounded-xl p-2 justify-center items-center">
            <form action="https://api.web3forms.com/submit" target="blank" method="POST" className="w-[50dvw] p-5 rounded-md bg-blue-500 flex flex-col gap-5">
            <h2 className="w-full font-bold text-white text-center text-xl p-2">MESSAGE ME</h2>
            <input type="hidden" name="access_key" value="e9437ca2-efb1-4a20-abc9-c5a79984c4e9" />
            <input type="text" name="name" className="bg-white p-2 rounded-md" placeholder="name" required />
            <input type="email" name="email" className="bg-white p-2 rounded-md" placeholder="email" required />
            <textarea name="message" className="bg-white p-2 rounded-md" placeholder="message" required></textarea>
            <button type="submit" className="w-full flex gap-2 p-2 bg-emerald-400 rounded-md text-xl font-bold text-white justify-center items-center hover:scale-none!">Send <Send /></button>
          </form>
          <div className="w-[50dvw] bg-blue-500 rounded-md p-5 flex flex-col gap-4">
            <h1 className="text-white font-bold">Contract Information</h1>
            <ul className="*:flex *:justify-start *:items-center *:gap-5 grid gap-5 *:text-white *:fond-bold">
              <li><FaEnvelope /> khembervill@gmail.com</li>
              <li><FaPhone className="text-green" /> +63 975 3066 898</li>
            </ul>
          </div>
           <nav className="w-full justify-center p-4 flex gap-10 *:text-2xl *:text-black">
                  <a href="https://github.com/EyeCodes" target="blank"><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/villegas-kennith-khember-399976414?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="blank"><FaLinkedin /></a>
                </nav>
          </div>
          
        </section>

      </main>
    </>
  )
}

export default App
