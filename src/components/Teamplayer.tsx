import team_arrow from '../assets/icons/team_arrow.png';
import Testimoni from './subcomponents/Testimoni';
const Teamplayer = () => {
  return (
    <section className="flex flex-col items-center justify-center md:items-start md:justify-start mb-10  pb-10 mr-2 ml-2">
      <h4 className='font-bold text-xl sm:text-xl lg:text-2xl text-secondary mt-5 mb-5 text-center  md:text-end md:pr-4'>Need a teamplayer? <span>Here what my Colleagues said about me</span></h4>
      <div className='flex flex-row justify-center w-full gap-8'>
        <img className='hidden sm:block items-center justify-center w-22 h-20' src={team_arrow} alt="" />
        <div className='flex flex-row items-start justify-start pt-2'>
          <Testimoni></Testimoni>
          <Testimoni></Testimoni>
          <Testimoni></Testimoni>
        </div>
      </div>
    </section>
  )
}

export default Teamplayer