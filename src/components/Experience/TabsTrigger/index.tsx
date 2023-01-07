import * as Tabs from '@radix-ui/react-tabs';

interface Tabs {
  name: string;
}

export function TabsTrigger({ name }: Tabs) {
  return (
    <Tabs.Trigger className="data-[state=active]:border-b-green-400 sm:data-[state=active]:border-b-black sm:data-[state=active]:border-l-green-400 cursor-pointer p-2 flex justify-start items-center border-4 border-black rounded after:w-2/3 after:bottom-0 after:h-[1px] after:bg-zinc-700 after:m-auto after:absolute relative" value={name}>
      {name}
    </Tabs.Trigger>
  );
}
