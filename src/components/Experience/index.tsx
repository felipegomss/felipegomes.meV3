import * as Tabs from '@radix-ui/react-tabs';
import { TabsTrigger } from './TabsTrigger';

export function Experience() {
  return (
    <div className='flex flex-col py-20 font-mono gap-10 px-10'>
      <h1 className='text-4xl font-start'>Exp</h1>

      <Tabs.Root className="flex w-full flex-col sm:flex-row" defaultValue="EISA">

        <Tabs.List className="flex flex-row sm:flex-col px-3 py-5" >
          <TabsTrigger name='EISA' />
          <TabsTrigger name='Parallel' />

        </Tabs.List>
        <div className='px-5 w-full border-t border-l-zinc-400 p-5'>
          <Tabs.Content className="w-full" value="EISA">
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
          <Tabs.Content className="w-full" value="Parallel">
            <div >
              <span className='flex justify-between flex-col sm:flex-row'>
                <h1 className='text-xl '>Full Cycle Developer</h1>
                <h3 className='text-zinc-400 text-mono'>
                  09-2020 | 04-2021
                </h3>
              </span>
              <h3 className='text-green-400'>Parallel Consulting & Training</h3>
              <p className='text-mono text-lg'>Maintenance and development of features in a sales platform for courses using React, NodeJs and MySql. Also, host management for the website and database with CPanel.</p>
              <p className='text-mono text-lg'>Application development for monitoring vital signs. Also as the development of responsible wearable technology.</p>
            </div>
          </Tabs.Content>
        </div>
      </Tabs.Root>
    </div>
  );


}
