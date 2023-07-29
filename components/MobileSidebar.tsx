'use client';

import { TfiMenuAlt } from 'react-icons/tfi';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from '@/components/Sidebar';
import { useEffect, useState } from 'react';
import { HamburgerButton } from './HamburgerButton';

export default function MobileSidebar() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger>
        {/* <Button
          variant='ghost'
          size='icon'
          className='md:hidden'
        >
          <TfiMenuAlt />
        </Button> */}
        <HamburgerButton />
      </SheetTrigger>
      <SheetContent
        side='left'
        className='p-0 w-[300px]'
      >
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
