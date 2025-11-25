import type { TestimoniMessage } from "../Teamplayer"

type TestimoniProps = {
  testimoni: TestimoniMessage
}

const Testimoni = ({testimoni}:TestimoniProps) => {
  return (
    <div className='flex flex-col justify-start items-start border-secondary border md:border-none p-2 m-2 snap-start min-w-[310px] h-45 max-h-50'>
        <h4 className=' text-primary text-xl font-extrabold '>
            {testimoni.developer}
        </h4>
        <p className='font-medium text-secondary text-lg'>{testimoni.projectName}</p>
        <p className='p-1 text-secondary text-md'>{testimoni.message}</p>
    </div>
  )
}

export default Testimoni