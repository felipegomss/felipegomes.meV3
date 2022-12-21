import '../../index.css';
import { FaConnectdevelop } from 'react-icons/fa';
import { ParallaxText } from '../../motion/Paralax';

export function Brands() {
  return (
    <div className=' bg-gradient-to-r py-[2px] from-green-900 via-green-400 to-green-900 font-righteous'>
      <div className='w-full bg-pattern-brands bg-bottom bg-auto flex flex-row justify-around text-4xl m-auto py-5 text-green-400 flex-wrap'>
        <ParallaxText baseVelocity={1}>
          <a href="https://parallel.com.br" target='_blank'>
            Parallel
          </a>
          <FaConnectdevelop />
          <a href="https://www.instagram.com/glup.design/" target='_blank'>
            Glup Design
          </a>
          <FaConnectdevelop />
          <a href="https://www.eisatecnologia.com.br" target='_blank'>
            EISA
          </a>
          <FaConnectdevelop />
          <a href="https://ritacrystal.com" target='_blank'>
            Rita Crystal
          </a>
          <FaConnectdevelop />
        </ParallaxText>
      </div>
    </div>
  );
}
