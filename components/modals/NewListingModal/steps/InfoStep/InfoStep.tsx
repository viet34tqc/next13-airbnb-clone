import ModalHeading from '@/components/ui/Modal/ModalHeading';
import InfoStepCounter from './InfoStepCounter';

const InfoStep = () => {
  return (
    <>
      <ModalHeading
        title="Share some basics about your place"
        subtitle="What amenitis do you have?"
      />
      <InfoStepCounter
        name='guestCount'
        title="Guests"
        subtitle="How many guests do you allow?"
      />
      <hr />
      <InfoStepCounter
        name='roomCount'
        title="Rooms"
        subtitle="How many rooms do you have?"
      />
      <hr />
      <InfoStepCounter
        name='bathroomCount'
        title="Bathrooms"
        subtitle="How many bathrooms do you have?"
      />
    </>
  );
};

export default InfoStep;
