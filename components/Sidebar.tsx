'use client';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
  MdOutlineSpaceDashboard,
  MdOutlineMessage,
  MdOutlineImage,
  MdOndemandVideo,
} from 'react-icons/md';
import { PiMusicNotesBold } from 'react-icons/pi';
const routes = [
  {
    label: 'Dashboard',
    icon: MdOutlineSpaceDashboard,
    href: '/dashboard',
    color: 'text-yellow-500',
  },
  {
    label: 'Conversation',
    icon: MdOutlineMessage,
    href: '/conversation',
    color: 'text-red-500',
  },
  {
    label: 'Image generation',
    icon: MdOutlineImage,
    href: '/image-generation',
    color: 'text-lime-500',
  },
  {
    label: 'Video generation',
    icon: MdOndemandVideo,
    href: '/video-generation',
    color: 'text-violet-500',
  },
  {
    label: 'Music generation',
    icon: PiMusicNotesBold,
    href: '/music-generation',
    color: 'text-pink-500',
  },
];
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className='space-y-4 py-4 flex flex-col h-full bg-[#121212] text-neutral-100'>
      <div className='pl-4 py-2 flex-1 border-collapse'>
        <Link href='/dashboard'>
          <div className='mb-14 flex items-center justify-center'>
            <span className='text-4xl font-bold'>br</span>
            <span className='text-4xl font-bold text-red-500'>ai</span>
            <span className='text-4xl font-bold'>n</span>
          </div>
        </Link>
        <div className='space-y-1'>
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm group flex pl-3 py-2 w-full justify-start font-medium cursor-pointer hover:text-black hover:bg-white rounded-l-xl transition ${
                pathname === route.href
                  ? 'bg-white rounded-l-xl text-black'
                  : ''
              }`}
            >
              <div className='flex items-center flex-1'>
                <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
