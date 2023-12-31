'use client';

import CountrySelect from '@/components/shared/CountrySelect';
import FieldMess from '@/components/ui/Form/FieldMess';
import ModalHeading from '@/components/ui/Modal/ModalHeading';
import dynamic from 'next/dynamic';
import { useFormContext, useWatch } from 'react-hook-form';

const Map = dynamic(() => import('@/components/shared/Map'));

const LocationStep = () => {
  const { setValue } = useFormContext();
  const location = useWatch({ name: 'location' });
  return (
    <>
      <ModalHeading
        title="Where do you wanna go?"
        subtitle="Find the perfect location!"
      />
      <div className="flex flex-col gap-2">
        <CountrySelect
          selectedCountry={location}
          onChange={value => setValue('location', value)}
        />
        <FieldMess name="location.value" />
      </div>
      <hr />
      {location.value && (
        <Map key={location?.latlng} center={location?.latlng} />
      )}
    </>
  );
};

export default LocationStep;
