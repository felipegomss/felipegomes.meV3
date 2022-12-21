import computer from '../../assets/vaporwave-computer.png'
import { motion } from 'framer-motion'

export function Banner() {
  return (
    <div className='py-44 flex justify-center items-center font-start flex-col-reverse sm:flex-row'>
      <div className='w-1/2 flex justify-start items-center flex-col'>
        <div className=''>
          <h1 className='text-4xl sm:text-7xl'>
            <span className='text-green-400'>
              Full
            </span>
            Stack
          </h1>
          <h3 className='text-lg font-mono sm:text-3xl'>Your idea, my skillset.</h3>
        </div>
      </div>
      <div className='w-1/2 flex justify-center items-center'>
        <motion.img src={computer} alt=""
          animate={{ rotate: [37, -28, 23, -17, 13, -9, 5, 0], }}
          transition={{ duration: 1.5, type: "spring" }} />
      </div>
    </div>
  );
}
