import ModalHeading from '@/components/ui/Modal/ModalHeading';
import ImageUpload from './ImageUpload';

const ImageStep = () => {
  return (
    <>
      <ModalHeading
        title="Add a photo of your place"
        subtitle="Show guests what your place looks like!"
      />
      <ImageUpload />
    </>
  );
};

export default ImageStep;
