import React, { ReactNode } from 'react';
import { HeartIcon, HomeIcon, LibraryIcon, PlusCircleIcon, RssIcon, SearchIcon } from '@heroicons/react/outline';
import clsx from 'clsx';

interface SidebarProps {

}
interface SidebarRowProps {
  icon: ReactNode,
  name: string,
  className?: string,
}

const SidebarRow = (props: SidebarRowProps) => {
  return (
    <button className={clsx("flex items-center space-x-2 hover:text-white", props.className)}>
      {props.icon}
      <p>{props.name}</p>
    </button>
  )
}
const Sidebar = (props: SidebarProps) => {
  const test = 'ddd';
  return (
    <div className='text-gray-500 text-sm p-5'>
      <div className='space-y-4'>
        <SidebarRow icon={<HomeIcon className="h-5 w-5" />} name='Home' />
        <SidebarRow icon={<SearchIcon className='h-5 w-5' />} name='Search' />
        <SidebarRow icon={<LibraryIcon className='h-5 w-5' />} name='Your library' />
        <hr className='border-t-[0.1px] border-gray-900' />
        <SidebarRow icon={<PlusCircleIcon className="h-5 w-5" />} name='Create playlist' />
        <SidebarRow icon={<HeartIcon className='h-5 w-5' />} name='Liked songs' />
        <SidebarRow icon={<RssIcon className='h-5 w-5' />} name='Your episodes' />
        <hr className='border-t-[0.1px] border-gray-900' />
        {[...Array(15).keys()].map(x =>
          <p key={x} className="cursor-pointer hover:text-white">
            Playlist name...
          </p>
        )}

      </div>
    </div>
  );
};

export default Sidebar;