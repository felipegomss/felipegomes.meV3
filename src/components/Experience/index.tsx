import * as Tabs from '@radix-ui/react-tabs';

export function Experience() {
  return (
    <div className='flex flex-col py-20 font-mono gap-10 px-10'>
      <h1 className='text-4xl font-start'>Exp</h1>

      <Tabs.Root className="flex w-full" defaultValue="tab1">

        <Tabs.List className="flex flex-col px-3" aria-label="Manage your account">
          <Tabs.Trigger className="cursor-pointer p-2 flex justify-content items-center data-[state=active]:border-l-green-400 border-l-black border-l-2 after:absolute after:w-4/6 after:bottom-0 after:h-[1px] after:bg-zinc-700 after:m-auto relative" value="tab1">
            EISA
          </Tabs.Trigger>
          <Tabs.Trigger className="cursor-pointer p-2 flex justify-content items-start data-[state=active]:border-l-green-400 border-l-black border-l-2 after:absolute after:w-4/6 after:bottom-0 after:h-[1px] after:bg-zinc-700 after:m-auto relative" value="tab2">
            Parallel
          </Tabs.Trigger>
          <Tabs.Trigger className="cursor-pointer p-2 flex justify-content items-start data-[state=active]:border-l-green-400 border-l-black border-l-2" value="tab3">
          </Tabs.Trigger>
        </Tabs.List>
        <div className='px-5 w-full border-l border-l-zinc-400'>
          <Tabs.Content className="w-full" value="tab1">
            <div>
              <span className='flex justify-between flex-col sm:flex-row'>
                <h1 className='text-xl'>QA - Software Analyst</h1>
                <h3 className='text-zinc-400 text-mono'>
                  05-2021| Present
                </h3>
              </span>
              <h3 className='text-green-400'>Ericsson Inovação S.A</h3>
              <p className='text-mono text-lg'>Creation and execution of manual and automated tests collecting evidence in OracleSQL database and linux servers with remote connections, as well as management of laboratory defects and approval of projects for VIVO - Telefônica, one of the biggest telephone companies in Brazil.</p>
            </div>
          </Tabs.Content>
          <Tabs.Content className="w-full" value="tab2">
            <div >
              <span className='flex justify-between flex-col sm:flex-row'>
                <h1 className='text-xl '>Full Stack Developer</h1>
                <h3 className='text-zinc-400 text-mono'>
                  09-2020 | 04-2021
                </h3>
              </span>
              <h3 className='text-green-400'>Parallel Consulting & Training</h3>
              <p className='text-mono text-lg'>Maintenance and development of features in a sales platform for courses using React, NodeJs and MySql.</p>
              <p className='text-mono text-lg'>Application development for monitoring vital signs. Also as the development of responsible wearable technology.</p>
            </div>
          </Tabs.Content>
        </div>
      </Tabs.Root>
    </div>
  );
}
