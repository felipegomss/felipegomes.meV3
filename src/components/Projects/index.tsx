import { Card } from '../Card';
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react';
import axios from "axios";

import branch from '../../assets/branch.png'

export type Repos = {
  name: string,
  languages: {
    edges: string[]
  },
  description: string,
  homepageUrl: string,
  url: string
}


export function Projects() {
  const carousel = useRef<any>()
  const [width, setWidth] = useState(2124)
  const [repos, setRepos] = useState<Repos[]>([])

  useEffect(() => {
    if (useState.length > 0)
      setWidth(2124 - carousel.current?.offsetWidth)
  }, [])
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(
        "https://api.github.com/graphql",
        {
          query:
            '{\n  user(login: "felipegomss") {\n    pinnedItems(first: 6, types: REPOSITORY) {\n      nodes {\n        ... on Repository {\n          name\n          description\n          homepageUrl\n          url\n          languages {\n            ...LanguageConnectionFragment\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment LanguageConnectionFragment on LanguageConnection {\n  edges {\n    node {\n      id\n      name\n      color\n    }\n  }\n}\n',
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            // Authorization: `bearer ${process.env.REACT_APP_GIT_API_TOKEN}`,
            Authorization: `bearer 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`,
          },
        }
      );
      const result = response.data.data.user.pinnedItems.nodes;
      setRepos(result);
    };
    fetchData();
  }, []);

  return (
    <div className='flex flex-col justify-center'>
      <h1 className='text-4xl sm:w-1/2 font-start m-auto'>
        Projects
      </h1>
      <div className='flex flex-col sm:flex-row'>
        <div className='sm:w-1/2 m-auto'>
          <img src={branch} alt="" className='w-full' />
        </div>
        <div className='w-full sm:w-1/3 m-auto'>
          <motion.div ref={carousel} className='cursor-grab overflow-hidden' whileTap={{ cursor: "grabbing" }}>
            <motion.div className='flex' drag="x" dragConstraints={{ right: 0, left: -width }} >
              {repos.map((item, index) => (
                <motion.div className='px-3' key={index}>
                  <Card name={item.name} description={item.description} languages={item.languages} homepageUrl={item.homepageUrl} url={item.url} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}