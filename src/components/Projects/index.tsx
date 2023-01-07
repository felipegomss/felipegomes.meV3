import * as Dialog from '@radix-ui/react-dialog';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

export function Projects() {
  return (
    <div className='flex flex-col py-20 font-mono gap-10 px-10'>
      <h1 className='text-4xl font-start'>Projects</h1>
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-4 rounded">
        <a href='http://countries.felipegomes.me' target="_blank" className="rounded border-2 border-green-400 cursor-pointer">
          <AspectRatio.Root ratio={16 / 9}>
            <div className="bg-country w-full h-full bg-cover bg-center">
              <div className='bg-green-900/75 backdrop-blur-sm w-full h-full grid items-center group'>
                <div className='text-center p-5'>
                  <h1 className='text-2xl'>Where in the world?</h1>
                  <p className='sm:hidden sm:group-hover:flex'>Get geo info about all countries around the world.</p>
                </div>
              </div>
            </div>
          </AspectRatio.Root>
        </a>
        <a href='https://streamjuice.felipegomes.me' target="_blank" className="rounded border-2 border-green-400 cursor-pointer">
          <AspectRatio.Root ratio={16 / 9}>
            <div className="bg-streamjuice w-full h-full bg-cover bg-center">
              <div className='bg-green-900/75 backdrop-blur-sm w-full h-full grid items-center group'>
                <div className='text-center p-5'>
                  <h1 className='text-2xl'>StreamJuice</h1>
                  <p className='sm:hidden sm:group-hover:flex'>A website to find movies & series and their streams.</p>
                </div>
              </div>
            </div>
          </AspectRatio.Root>
        </a>
      </div>

    </div>
  );
}
