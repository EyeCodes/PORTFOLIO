import {  Send  } from 'lucide-react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
// import { FaGithub, FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
export const Contact: React.FC = () => {
  return(
    <div className=" h-fit w-full inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] p-2 flex flex-col items-center relative">
          <h1 className="h-fit text-md font-bold text-blue-500">CONTACT ME</h1>
          <div className="w-80 flex flex-wrap lg:flex-nowrap gap-2 rounded-xl justify-center items-center p-2">
            <form action="https://api.web3forms.com/submit" target="blank" method="POST" className="*:h-10 *:w-70 rounded-md flex flex-col lg:flex-row gap-2 *:[&_input]:border *:[&_input]:border-slate-300 *:[&_input]:bg-none">
            <input type="hidden" name="access_key" value="e9437ca2-efb1-4a20-abc9-c5a79984c4e9" />
            <input type="text" name="name" className="bg-white p-2 rounded-md" placeholder="name" required />
            <input type="email" name="email" className="bg-white p-2 rounded-md" placeholder="email" required />
            <textarea name="message" className="bg-white h-50! lg:h-10! p-2 rounded-md resize-none" placeholder="message" required></textarea>
            <button type="submit" className="w-full flex gap-2 p-2 bg-green-400 hover:bg-green-500 rounded-md text-xl font-bold text-white justify-center items-center hover:scale-none!">Send <Send /></button>
          </form>
          </div>
           <ul className="flex flex-col lg:flex-row pb-2 justify-center md:flex-col *:flex *:justify-start *:items-center *:gap-5 gap-5 *:text-white *:fond-bold">
              <li><FaEnvelope /> khembervill@gmail.com</li>
              <li><FaPhone className="text-green" /> +63 975 3066 898</li>
            </ul>
        </div>
  )
}