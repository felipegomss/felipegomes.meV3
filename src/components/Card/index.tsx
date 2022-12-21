import { Repos } from '../Projects';
import { useState, useEffect } from 'react';

type langsArray = {
  node: {
    color: string,
    name: string
  }
}
export function Card({
  name,
  languages,
  description,
  homepageUrl,
  url }: Repos
) {
  const [langs, setLangs] = useState<langsArray[]>([])

  useEffect(() => {
    setLangs(languages.edges)
  }, [])
  return (
    <div className='h-[420px] w-[330px] bg-green-900 px-5 py-6 m-auto border-2 border-green-400 rounded-lg relative font-mono z-0'>
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
        <span className='flex'>
          {url ?
            <a href={url} target="_blank" className='w-1/4 border-green-200 bg-green-900 text-white hover:border-green-400 flex justify-center items-center border'>Repo</a>
            :
            <div className='w-1/4 border-green-200 bg-green-900 text-white flex justify-center items-center border cursor-not-allowed opacity-30'>Repo</div>
          }
          {homepageUrl ?
            <a href={homepageUrl} target="_blank" className='w-1/4 border-green-200 bg-green-900 text-white hover:border-green-400 flex justify-center items-center border'>Site</a>
            :
            <div className='w-1/4 border-green-200 bg-green-900 text-white flex justify-center items-center border cursor-not-allowed opacity-30' >Site</div>
          }
        </span>
      </div>
    </div >
  );
}
