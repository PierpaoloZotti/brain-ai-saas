import Image from 'next/image';

interface EmptyStateProps {
  label: string;
}

export const EmptyState = ({ label }: EmptyStateProps) => {
  return (
    <div className='h-full p-14 flex flex-col items-center justify-center'>
      <div className='relative h-72 w-72'>
        <Image
          src='/empty.png'
          alt='empty state'
          fill
          className='opacity-70'
        />
      </div>
      <p className='text-muted-foreground text-sm text-center'>{label}</p>
    </div>
  );
};
