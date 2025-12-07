import type { TestimoniMessage } from "../Teamplayer"
import { motion } from 'motion/react'
type TestimoniProps = {
  testimoni: TestimoniMessage;
  index: number;
}

const Testimoni = ({testimoni, index}:TestimoniProps) => {
  return (
    <motion.div 
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 + 0.3 }}
    
    className='flex flex-col justify-start items-start border-secondary border md:border-none p-2 m-2 snap-start min-w-[310px] h-80 md:h-60'>
        <h4 className=' text-primary text-xl font-extrabold '>
            {testimoni.developer}
        </h4>
        <p className='font-medium text-secondary text-lg'>{testimoni.projectName}</p>
        <p className='p-1 text-secondary text-md'>{testimoni.message}</p>
    </motion.div>
  )
}

export default Testimoni