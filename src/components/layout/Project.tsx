import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import { SquareArrowOutUpRight  } from 'lucide-react';
import { SiTailwindcss, SiLaravel, SiJavascript, SiChatbot, SiLivewire, SiMariadb, SiReact, SiFirebase, SiUbuntu, SiDocker, SiPostgresql } from 'react-icons/si';
import type { ReactNode } from 'react';
interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => (
  <div className='h-full w-full bg-slate-600 opacity-0 hover:opacity-85 [@media(hover:hover)]:hover:opacity-85 flex flex-col justify-between gap-0 p-4 absolute top-0 left-0 z-10'>
    {children}
  </div>
);
export const Project: React.FC = () => {
    const [rsafety] = useEmblaCarousel({ loop: true }, [ Autoplay({delay: 5000, stopOnInteraction: true})])
  return(
    <div className="h-90 lg:h-80 w-[90%] lg:w-[60%]  border-x-2 border-x-slate-200 inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] p-2 flex flex-col items-center relative">
            <div className="h-full rounded-md grid gap-2 relative">
              <div className="overflow-hidden w-full mx-auto relative" ref={rsafety}>
                <div className="flex relative">
                  <div className="flex-[0_0_100%] max-w-full min-w-0 text-white relative">
                    <img src="/projects/rsafety/login.png" className='object-cover' alt="rsafety_login" />
                    <Container>
                      <div className='flex justify-between'><h1 className='text-2xl font-bold text-white'>RSafety</h1><span className='px-2 self-center rounded-4xl bg-red-400'>Group</span></div>
                      <div className='h-full flex flex-col justify-evenly'>
                        <p className="text-justify">A hackathon project based on SDG-16 promoting peace and unity. A web service where users are able to post and share their experiences, join diverse group of communities, check their area for bad activities that happened, read the laws about crime and violence and contact professional help.</p>
                      <div className="flex justify-evenly *:text-[2.5vw] *:text-white p-2 gap-4">
                        <SiLaravel /> <SiTailwindcss /> <SiJavascript /> <SiMariadb /> <SiChatbot />
                      </div>
                      </div>
                    </Container>
                  </div>
                  <div className="flex-[0_0_100%] max-w-full min-w-0 text-white relative">
                    <img src="/projects/tasknotes/main.png" className='object-cover' alt="tasknotes_login" />
                    <Container>
                      <div className='flex justify-between'><h1 className='text-2xl font-bold text-white'>TaskNotes</h1><span className='px-2 self-center rounded-4xl bg-red-400'>Solo</span></div>
                      <div className='h-full flex flex-col justify-evenly'>
                      <p className="text-justify">A simple project where you can create a task with title, description, and due date. Users will be able to see their current pending task, completed task and create/update/delete task.</p>
                      <div className="flex justify-evenly *:text-[2.5vw] *:text-white p-2 gap-4">
                        <SiLaravel /> <SiTailwindcss /> <SiLivewire /> <SiMariadb />
                      </div>
                      </div>
                    </Container>
                  </div>
                  <div className="flex-[0_0_100%] max-w-full min-w-0 text-white relative">
                    <img src="/projects/suggestion/home.png" alt="suggestion_homepage" className='object-cover' />
                    <Container>
                      <div className='flex justify-between'><h1 className='text-2xl font-bold text-white'>Suggestion Box</h1><span className='px-2 self-center rounded-4xl bg-red-400'>Solo</span></div>
                      <div className='h-full flex flex-col justify-evenly'>
                      <p className="text-justify">Account free suggestion box.Users can create a suggestion box set tite, description, set color and add image in front of the box. Participant users will only have to search for the box name to send their suggestion/letter.
                      <a href="https://suggestion-box-4d492.web.app/" className='w-fit p-2 float-end rounded-md bg-green-500 hover:bg-green-400 gap-4 flex justify-end items-center font-bold'>Visit Project <SquareArrowOutUpRight /></a>
                      </p>
                      <div className="flex justify-evenly *:text-[2.5vw] *:text-white p-2 gap-4">
                        <SiReact /> <SiTailwindcss /> <SiFirebase />
                      </div>
                      </div>
                    </Container>
                  </div>
                  <div className="flex-[0_0_100%] max-w-full min-w-0 text-white relative">
                    <img src="/projects/inventory-management/dashboard.png" className='object-cover' alt="inventory_management_dashboard" />
                    <Container>
                      <div className='flex justify-between'><h1 className='text-2xl font-bold text-white'>Inventory Management System</h1><span className='px-2 self-center rounded-4xl bg-red-400'>Solo</span></div>
                      <div className='h-full flex flex-col justify-evenly'>
                      <p className="text-justify">Full-Stack Development of a Inventory System, CRUD of items and forms, download forms. Used WSL Ubuntu and WSL docker to deploy system locally while saving performance usage.</p>
                      <div className="flex justify-evenly *:text-[2.5vw] *:text-white p-2 gap-4">
                        <SiLaravel /> <SiTailwindcss /> <SiJavascript /> <SiLivewire /> <SiPostgresql /> <SiUbuntu /> <SiDocker />
                      </div>
                      </div>
                    </Container>
                  </div>
                </div>
              </div>
            </div>

        </div>
  )
} 