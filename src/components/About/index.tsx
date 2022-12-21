import react from '../../assets/react.png'
import node from '../../assets/node.png'
import ts from '../../assets/ts.png'
import felipe from '../../assets/felipe.png'

export function About() {
  return (
    <div className='flex flex-col-reverse sm:flex-row py-20 px-10 font-mono'>
      <div className='sm:w-1/2 flex items-center justify-around flex-col m-auto my-0'>
        <div >
          <h1 className='text-4xl font-start'>Felipe Gomes</h1>
          <p>+3 years of experience with IT, I started as a full stack developer where I worked with ReactJs and Node, technologies that I love and seek to specialize in until today. I currently work at Ericsson Inovação S.A, creating and running tests on projects for our client, VIVO - Telefônica, one of the biggest telephone companies in Brazil, that impacts the lives of more than 90 million people.
            Passionate about technology and knowledge, my mission is to turn ideas into reality always with the best quality as possible.
          </p>
        </div>
        <div className='flex flex-row gap-5 py-10'>
          <div className='w-1/3 translate-y-16'>
            <img src={node} alt="" className='w-full h-full ' />
          </div>
          <div className='w-1/3'>
            <img src={react} alt="" className='w-full h-full' />
          </div>
          <div className='w-1/3 translate-y-16'>
            <img src={ts} alt="" className='w-full h-full' />
          </div>
        </div>
      </div>
      <div className='sm:w-1/2 flex justify-end m-auto'>
        <img src={felipe} alt="" className='w-full max-w-fit m-auto my-0' />
      </div>
    </div>
  );
}
