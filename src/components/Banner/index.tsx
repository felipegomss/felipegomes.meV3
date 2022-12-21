import computer from '../../assets/vaporwave-computer.png'
import { motion } from 'framer-motion'

export function Banner() {
  return (
    <div className='pt-10 pb-24 sm:py-32 flex justify-center items-center font-start flex-col-reverse sm:flex-row'>
      <div className='sm:w-1/2 flex justify-start items-center flex-col'>
        <div className=''>
          <h1 className='text-2xl pt-10 sm:pt-0 sm:text-4xl'>
            Your{""}
            <span className='text-green-400'>
              idea</span>,
            <div>
              my skillset.
            </div>
          </h1>
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
