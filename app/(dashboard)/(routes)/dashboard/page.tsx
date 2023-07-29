'use client';

import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  MdOutlineMessage,
  MdOutlineImage,
  MdOndemandVideo,
  MdOutlineCode,
  MdArrowForward,
} from 'react-icons/md';
import { PiMusicNotesBold } from 'react-icons/pi';
const tools = [
  {
    label: 'Conversation',
    icon: MdOutlineMessage,
    href: '/conversation',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
  },
  {
    label: 'Image generation',
    icon: MdOutlineImage,
    href: '/image-generation',
    color: 'text-lime-500',
    bgColor: 'bg-lime-500/10',
  },
  {
    label: 'Video generation',
    icon: MdOndemandVideo,
    href: '/video-generation',
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
  },
  {
    label: 'Music generation',
    icon: PiMusicNotesBold,
    href: '/music-generation',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
  },
  {
    label: 'Code generation',
    icon: MdOutlineCode,
    href: '/code-generation',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  },
];
const DashboardPage = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div>
      <div className='mb-8 space-y-4'>
        <h2 className='text-2xl md:text-4xl font-bold text-center'>
          Discover the power of Artificial Inetelligence
        </h2>
        <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>
          Chat with the smartest AI
        </p>
      </div>
      <div className='px-4 md:px-20 lg:px-32 space-y-4'>
        {tools.map((tool) => (
          <Card
            key={tool.href}
            className={cn(
              'px-1 border-black/5 flex items-center justify-between hover:shadow-lg transition cursor-pointer',
              tool.bgColor,
            )}
            onClick={() => router.push(`${tool.href}`)}
          >
            <CardHeader>
              <CardTitle className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <tool.icon className={cn('h-8 w-8 mr-10', tool.color)} />
                  <p className='font-bold text-lg md:text-xl'>{tool.label}</p>
                </div>
              </CardTitle>
            </CardHeader>
            <MdArrowForward className='w-4 h-4' />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
