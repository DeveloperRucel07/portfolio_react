import team_arrow from '../assets/icons/team_arrow.png';
import Testimoni from './subcomponents/Testimoni';
import { useTranslation } from "react-i18next"

export type TestimoniMessage ={
  developer:string,
  projectName: string,
  message:string,
}
const Teamplayer = () => {
  const {t} = useTranslation();

  const testimonies: TestimoniMessage[] = [
    {
      developer: "Tino Wulf",
      projectName: "Project Join",
      message: t("teamplayer.message_1"),
    },
    {
      developer: "Andreas Brem",
      projectName: "Project Kockwelt",
      message:  t("teamplayer.message_2"),
    },
    {
      developer: "Jeremy Nánási",
      projectName: "Project Join",
      message:  t("teamplayer.message_3"),
    },
  ]


  return (
    <section className="flex flex-col items-center justify-center md:items-start md:justify-start mb-10  pb-10 mr-2 ml-2">
      <h4 className='font-bold text-xl sm:text-xl lg:text-2xl text-secondary mt-5 mb-5 text-center  md:text-end md:pr-4'>{t("teamplayer.need")}<span className='text-lg'>{t("teamplayer.team_saying")}</span></h4>
      <div className='flex flex-row justify-center w-full gap-8'>
        <img className='hidden sm:block items-center justify-center w-22 h-20' src={team_arrow} alt="" />
        <div className='team-player flex flex-row items-start justify-start pt-2 md:snap-none snap-x snap-mandatory touch-auto w-auto scroll-smooth overflow-x-scroll md:overflow-x-hidden'>
          {testimonies.map((testimoni, index)=>( 
            <Testimoni testimoni={testimoni} index={index} key={index} ></Testimoni>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Teamplayer