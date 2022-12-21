import '../../index.css';

export function Brands() {
  return (
    <div className=' bg-gradient-to-r py-[2px] from-green-900 via-green-400 to-green-900 font-righteous'>
      <div className='w-full bg-pattern-brands bg-bottom bg-auto'>
        <div className='w-full max-w-[1500px] flex flex-row justify-around text-4xl m-auto py-5 text-green-400 flex-wrap'>
          <a href="https://parallel.com.br" className='hover:bg-black/5 hover:backdrop-blur-sm px-10 py-5 rounded-lg' target='_blank'>Parallel</a>
          <a href="https://www.instagram.com/glup.design/" className='hover:bg-black/5 hover:backdrop-blur-sm px-10 py-5 rounded-lg' target='_blank'>Glup Design</a>
          <a href="https://www.eisatecnologia.com.br" className='hover:bg-black/5 hover:backdrop-blur-sm px-10 py-5 rounded-lg' target='_blank'>EISA</a>
          <a href="https://ritacrystal.com" className='hover:bg-black/5 hover:backdrop-blur-sm px-10 py-5 rounded-lg' target='_blank'>Rita Crystal</a>
        </div>
      </div>
    </div>
  );
}
