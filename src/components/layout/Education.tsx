export const Education: React.FC = () =>{
  return(
    <section className="w-full grid gap-2" >
          <h1 className="text-2xl font-bold text-blue-500">EDUCATION</h1>
          <div className="w-[90vw] flex flex-wrap md:flex-nowrap gap-4 border-2 border-blue-500  rounded-xl p-2">
            <div className="w-full bg-blue-500 flex flex-col rounded-md items-center p-2">
              <h1 className="font-bold text-[3vw] md:text-xl text-white p-1">Negros Oriental State University - 2026</h1>
              <h2 className="text-white">Computer Science</h2>
            </div>
          </div>
        </section>
  )
}