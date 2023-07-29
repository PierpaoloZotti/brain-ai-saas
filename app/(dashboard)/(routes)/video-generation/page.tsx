import { Heading } from '@/components/Heading';
import { MdOndemandVideo } from 'react-icons/md';

const VideoGenerationPage = () => {
  return (
    <Heading
      title='Video generation'
      description='Now you can create your own video from plain text. Lets try!!'
      icon={MdOndemandVideo}
      iconColor='text-violet-500'
      bgColor='bg-violet-500/10'
    />
  );
};

export default VideoGenerationPage;
