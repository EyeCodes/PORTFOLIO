

export const About: React.FC = () => {
  return (
              <div className="h-fit lg:h-70 w-[90%] lg:w-[30%] border-x-2 border-x-slate-200 inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] p-2 flex flex-col items-center">
                <h1 className="text-xl font-bold text-blue-500 pb-2">ABOUT ME</h1>
                <p className="max-h-fit text-wrap w-full flex text-justify text-white overflow-y-scroll scrollbar-hide">I am a web developer specializing in backend dvelopment. I primarily build with Laravel, paired with React and Tailwind for the frontend. I am deeply passionate about learning new concepts and translating them into clean, functional logic. I have guided projects from start to finish as a Full-Stack Developer, Team Lead, and Code Reviewer, ensuring our team stays coordinated and our code stays clean. 
                </p>
              </div>
  )
}