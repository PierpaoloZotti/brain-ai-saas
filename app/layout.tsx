import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { cn } from '@/lib/utils';
const font = Urbanist({ subsets: ['latin'] });
import './globals.css';

export const metadata: Metadata = {
  title: 'brAIn',
  description: 'AI multi purpouse platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={cn('bg-neutral-200', font.className)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
