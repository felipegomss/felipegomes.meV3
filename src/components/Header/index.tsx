import logo from '../../assets/logo.png';
import { FaConnectdevelop } from 'react-icons/fa';

import '../../index.css'
import { useReadingProgress } from '../../hooks/useReadingProgress';

type Header = {
  about: any,
  portifolio: any,
  contact: any
}

export function Header({ about,
  portifolio,
  contact }: Header) {
  const progress = useReadingProgress()

  return (
    <div className='sticky top-0 z-10'>
      <div className='w-full max-w-[1500px] flex flex-row justify-between py-10 m-auto'>
        <span className='hex bg-black/20 backdrop-blur-sm hidden sm'>
          <a href="/" className=' flex justify-center m-auto'>
            <img src={logo} className='w-14 h-14' />
          </a>
        </span>
        <div className='w-full max-w-[550px] text-neutral-50 gap-10 flex justify-center items-center bg-black/50 rounded-full px-20 text-lg'>
          <button onClick={portifolio} className='hover:text-green-400'>PROJECTS</button>
          <button onClick={about} className='hover:text-green-400'>ABOUT</button>
          <span className='text-green-400 flex items-center gap-1'>
            <FaConnectdevelop />
            <button onClick={contact} className='border-y py-2 hover:border-green-400'> GET IN TOUCH</button>
            <FaConnectdevelop />
          </span>
        </div>
      </div>
      <span style={{ transform: `translateX(${progress - 100}%)` }} className='absolute bg-green-400 h-1 w-full top-0'></span>
    </div>
  );
}
