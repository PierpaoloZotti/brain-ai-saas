import { Heading } from '@/components/Heading';
import { MdOutlineCode } from 'react-icons/md';

const CodeGenerationPage = () => {
  return (
    <Heading
      title='Code generation'
      description='Need some help with your code?'
      icon={MdOutlineCode}
      iconColor='text-orange-500'
      bgColor='bg-orange-500/10'
    />
  );
};

export default CodeGenerationPage;
