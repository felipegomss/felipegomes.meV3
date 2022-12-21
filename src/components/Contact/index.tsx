import { useState } from 'react';
import { RiFileCopyLine, RiFileCopyFill } from 'react-icons/ri'
import { BiLinkExternal } from 'react-icons/bi'
import copy from "copy-to-clipboard";


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
      <div className='flex flex-col sm:flex-row items-center justify-between'>
        <img src="https://readme-typing-svg.herokuapp.com?font=Press+Start+2P&size=36&pause=1000&color=FFFFFF&vCenter=true&width=500&height=70&lines=Drop+me+a+line"
          alt="Dropme a line" />
        <div
          className='sm:w-1/2 h-1 bg-green-400 shadow-lime-200' />
      </div>
      <div className='flex flex-col sm:flex-row pt-16'>
        <a href='mailto:contato@felipegomes.me' target='_blank'
          className='gap-2 w-full m-auto border-green-200 bg-green-900 text-white hover:border-green-400 flex justify-center items-center h-16 text-2xl border-4'>
          Email
          <BiLinkExternal size={18} />
        </a>
        <a href='https://www.linkedin.com/in/felipegomss/' target='_blank'
          className='gap-2 w-full m-auto border-green-200 bg-green-900 text-white hover:border-green-400 flex justify-center items-center h-16 text-2xl border-4'>
          Linkedin
          <BiLinkExternal size={18} />
        </a>
        <a href='https://www.instagram.com/felipegomss' target='_blank'
          className='gap-2 w-full m-auto border-green-200 bg-green-900 text-white hover:border-green-400 flex justify-center items-center h-16 text-2xl border-4'>
          Instagram
          <BiLinkExternal size={18} />
        </a>
        <a href='https://api.whatsapp.com/send?phone=5571994178164' target='_blank'
          className='gap-2 w-full m-auto border-green-200 bg-green-900 text-white hover:border-green-400 flex justify-center items-center h-16 text-2xl border-4'>
          Whatsapp
          <BiLinkExternal size={18} />
        </a>
        <button onClick={copyId} className='gap-2 w-full m-auto border-green-200 bg-green-900 text-white hover:border-green-400 flex justify-center items-center h-16 text-2xl border-4'>
          {copied ?
            <>
              <RiFileCopyFill />
              Felipe Gomes#2005

            </>
            :
            <>
              <RiFileCopyLine />
              Discord
            </>
          }

        </button>
      </div>
    </div>
  );
}
