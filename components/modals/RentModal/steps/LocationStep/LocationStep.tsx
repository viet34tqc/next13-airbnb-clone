'use client';

import CountrySelect from '@/components/shared/CountrySelect';
import ModalHeading from '@/components/ui/Modal/ModalHeading';
import dynamic from 'next/dynamic';
import { useFormContext, useWatch } from 'react-hook-form';

const Map = dynamic(() => import('@/components/shared/Map'), {
  ssr: false, // Need this to make the map to re-render when we change the location
});

const LocationStep = () => {
  const { setValue } = useFormContext();
  const location = useWatch({ name: 'location' });

  return (
    <>
      <ModalHeading
        title="Where is your place located?"
        subtitle="Help guests find you!"
      />
      <CountrySelect onChange={value => setValue('location', value)} />
      {location && <Map center={location?.latlng} />}
    </>
  );
};

export default LocationStep;
