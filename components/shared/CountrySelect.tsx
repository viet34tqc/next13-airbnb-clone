'use client';

import useCountries from '@/hooks/useCountries';
import { CountrySelectSchema } from '@/lib/schemas';
import { ChangeEvent } from 'react';
import { z } from 'zod';
import Select from '../ui/Form/Select';

export const defaultCountryOption = {
  label: '',
  latlng: [0, 0],
  value: '',
};

export type CountrySelectValue = z.infer<typeof CountrySelectSchema>;

type Props = {
  selectedCountry: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
};

const CountrySelect = ({ selectedCountry, onChange }: Props) => {
  const { getOptions, getByValue } = useCountries();
  const options = [{ value: '', label: 'Select your country' }, ...getOptions];

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value) {
      onChange(defaultCountryOption);
      return;
    }
    const selectedItem = getByValue(e.target.value);
    if (selectedItem) {
      onChange(selectedItem);
    }
  };

  return (
    <div>
      <Select
        placeholder="Anywhere"
        value={selectedCountry.value}
        options={options}
        onChange={handleChange}
      />
    </div>
  );
};

export default CountrySelect;
