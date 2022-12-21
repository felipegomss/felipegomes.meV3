import copy from "copy-to-clipboard";
import { useState } from 'react';


export function Contact() {
  const [copied, setCopied] = useState(false)

  const sleep = (ms: number) => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  async function copyId() {
    copy("Felipe Gomes#2005")
    setCopied(true)
    await sleep(1500)
    setCopied(false)
  }

  return (
    <div className='flex flex-col py-20 font-mono gap-10 px-10'>
      <div className='flex flex-col sm:flex-row items-center'>
        <h1 className='text-4xl sm:w-1/2  font-start'>Drop me a
          <span className='text-green-400'>
            &#32;
            line
          </span>
        </h1>
        <div className='sm:w-1/2 h-1 bg-green-400 shadow-lime-200'>
        </div>
      </div>
      <div className='flex flex-col pt-16'>
        <a href='mailto:contato@felipegomes.me' target='_blank' className='w-1/2 m-auto border-green-200 bg-green-900 text-white hover:border-green-400 flex justify-center items-center h-16 text-3xl border-4'>Email</a>
        <a href='https://www.linkedin.com/in/felipegomss/' target='_blank' className='w-1/2 m-auto border-green-200 bg-green-900 text-white hover:border-green-400 flex justify-center items-center h-16 text-3xl border-4'>Linkedin</a>
        <a href='https://www.instagram.com/felipegomss' target='_blank' className='w-1/2 m-auto border-green-200 bg-green-900 text-white hover:border-green-400 flex justify-center items-center h-16 text-3xl border-4'>Instagram</a>
        <a href='https://api.whatsapp.com/send?phone=5571994178164' target='_blank' className='w-1/2 m-auto border-green-200 bg-green-900 text-white hover:border-green-400 flex justify-center items-center h-16 text-3xl border-4'>Whatsapp</a>
        <button onClick={copyId} className='w-1/2 m-auto border-green-200 bg-green-900 text-white hover:border-green-400 flex justify-center items-center h-16 text-3xl border-4'>
          {copied ? 'Id was copied' : 'Discord'}
        </button>
      </div>
    </div>
  );
}
