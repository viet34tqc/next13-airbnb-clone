import CountrySelect from '@/components/shared/CountrySelect';
import ModalHeading from '@/components/ui/Modal/ModalHeading';
import { useFormContext, useWatch } from 'react-hook-form';

type Props = {};

const LocationStep = (props: Props) => {
  const { setValue } = useFormContext();
  return (
    <>
      <ModalHeading
        title="Where is your place located?"
        subtitle="Help guests find you!"
      />
      <CountrySelect onChange={value => setValue('location', value)} />
    </>
  );
};

export default LocationStep;
