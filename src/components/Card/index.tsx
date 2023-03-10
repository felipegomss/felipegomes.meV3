import { Repos } from '../Repositories';
import { useState, useEffect } from 'react';
import { BiLinkExternal } from 'react-icons/bi';

export function Card({
  name,
  languages,
  description,
  url }: Repos
) {
  const [langs, setLangs] = useState<any[]>([])

  useEffect(() => {
    setLangs(languages.edges)
  }, [])
  return (
    <div className='h-[420px] w-[330px] bg-green-900 px-5 py-6 m-auto border-2 border-green-400 rounded-lg relative font-mono z-0 '>
      <span className='h-[5px] w-[100px] top-0 left-9 bg-green-200 absolute shadow-2xl'></span>
      <div className='bg-web bg-contain bg-no-repeat bg-center h-full flex flex-col justify-between py-3 bg-black/20 rounded-lg backdrop-blur-sm p-5'>
        <span>
          <h1 className='text-lg font-start truncate'>{name}</h1>
          <span className='flex'>
            {langs.length > 0 ?
              langs.map((lang, index) => {
                return (
                  <span key={index} className='w-1/4'>
                    {(lang.node.name == "JavaScript" && (
                      <p>JS</p>
                    )) ||
                      (lang.node.name == "TypeScript" && (
                        <p>TS</p>
                      )) || <p>{lang.node.name}</p>}
                  </span>
                )
              })
              :
              ""
            }
          </span>
        </span>
        <p >{description}</p>
        <a href={url} target="_blank" className='border-green-200 bg-green-900 text-white hover:border-green-400 flex justify-center items-center border'>Github
          <BiLinkExternal size={18} />
        </a>
      </div>
    </div >
  );
}
