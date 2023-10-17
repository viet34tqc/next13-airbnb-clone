import ModalHeading from '@/components/ui/Modal/ModalHeading';
import InfoStepCounter from '../../NewListingModal/steps/InfoStep/InfoStepCounter';

const InfoFilter = () => {
  return (
    <>
      <ModalHeading
        title="More information"
        subtitle="Find your perfect place!"
      />
      <InfoStepCounter
        name="guestCount"
        title="Guests"
        subtitle="How many guests do you allow?"
      />
      <hr />
      <InfoStepCounter
        name="roomCount"
        title="Rooms"
        subtitle="How many rooms do you have?"
      />
      <hr />
      <InfoStepCounter
        name="bathroomCount"
        title="Bathrooms"
        subtitle="How many bathrooms do you have?"
      />
    </>
  );
};

export default InfoFilter;
