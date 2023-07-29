import { Heading } from '@/components/Heading';
import { MdOutlineImage } from 'react-icons/md';

const ImageGenerationPage = () => {
  return (
    <Heading
      title='Image generation'
      description='Write down your ideas and the AI will generate the images for you'
      icon={MdOutlineImage}
      iconColor='text-lime-500'
      bgColor='bg-lime-500/10'
    />
  );
};

export default ImageGenerationPage;
