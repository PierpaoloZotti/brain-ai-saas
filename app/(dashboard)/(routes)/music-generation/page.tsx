import { Heading } from '@/components/Heading';
import { PiMusicNotesBold } from 'react-icons/pi';

const MusicGenerationPage = () => {
  return (
    <Heading
      title='Music generation'
      description='Tired about the same rithms? Lets do some stuff together'
      icon={PiMusicNotesBold}
      iconColor='text-pink-500'
      bgColor='bg-pink-500/10'
    />
  );
};

export default MusicGenerationPage;
