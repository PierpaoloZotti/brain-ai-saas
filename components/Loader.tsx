import Image from 'next/image';

export const Loader = () => {
  return (
    <div className='flex items-center space-x-4'>
      <div className='relative h-12 w-12'>
        <Image
          src='/logo.png'
          fill
          alt='logo'
          className='animate-pulse'
        />
      </div>
      <p>
        <span className='font-bold'>br</span>
        <span className='font-bold text-red-500'>ai</span>
        <span className='font-bold'>n</span> is thinking about your question...
      </p>
    </div>
  );
};
