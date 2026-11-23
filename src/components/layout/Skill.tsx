import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import { SiCss, SiDocker, SiFirebase, SiGit, SiGithub, SiHtml5, SiJavascript, SiLaravel, SiMariadb, SiMysql, SiN8N, SiPhp, SiPostgresql, SiReact, SiShopify, SiTailwindcss } from 'react-icons/si';
import type { ReactNode } from 'react';

interface ShelveProp {
  children: ReactNode;
}

const Shelves = ({ children }: ShelveProp) => (
  <div className="h-full flex-[0_0_100%] justify-evenly items-center flex flex-col border-5 border-double border-slate-300 max-w-full text-white *:text-[10vw] *:lg:text-[3.5vw] *:px-2 *:border-double *:border-b-5 *:border-b-slate-300 *:w-full">
    {children}
  </div>
);

export const Skill = () =>{
  const [frontend] = useEmblaCarousel({ loop: true }, [ Autoplay({delay: 5000, stopOnInteraction: false})])
  return(
            <div className=" h-70 w:screen lg:w-[10%] p-2 flex flex-col items-center relative">
            <div className="overflow-hidden h-full w-full mx-auto" ref={frontend}>
                <div className="h-full w-full flex">
                  <Shelves >
                    <SiJavascript className='text-yellow-300' />
                    <SiTailwindcss className='text-blue-400' />
                    <span className='flex justify-center gap-5'><SiHtml5 className='text-orange-600' /> <SiCss className='text-blue-500' /></span>
                    <SiShopify className='text-lime-300'></SiShopify>
                  </Shelves>
                  <Shelves>
                    <SiReact className='text-blue-400' />
                    <SiLaravel className='text-red-500' />
                    <SiPhp className='text-blue-500' />
                    <SiFirebase className='text-orange-400' />
                  </Shelves>
                  <Shelves>
                    <SiMariadb className='text-green-800' />
                    <SiPostgresql className='text-blue-500' />
                    <SiMysql className='text-blue-400'/>
                  </Shelves>
                  <Shelves>
                    <SiDocker className='text-blue-500' />
                    <SiGit className='text-orange-400' />
                    <SiN8N className='text-pink-600' />
                    <SiGithub />
                  </Shelves>
                </div>
              </div>

          </div>
  )
}