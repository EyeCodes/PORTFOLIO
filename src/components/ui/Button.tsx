
interface BtnProps{
  title: string;
  // children: React.ReactNode;
}

export const Button = ({title}: BtnProps) =>{
  return(
    <button className="w-fit p-2 border-b-2 border-b-slate-300 text-xl font-bold text-slate-300">{title}</button>
  )
}