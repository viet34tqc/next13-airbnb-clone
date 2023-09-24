'use client';

import useCountries from '@/hooks/useCountries';
import { ChangeEvent } from 'react';
import { z } from 'zod';
import Select from '../ui/Form/Select';

export const CountrySelectSchema = z.object({
  flag: z.string(),
  label: z.string(),
  latlng: z.array(z.number()),
  region: z.string(),
  value: z.string(),
});

export const defaultCountryOption = {
  flag: '',
  label: '',
  latlng: [0, 0],
  region: '',
  value: '',
};

export type CountrySelectValue = z.infer<typeof CountrySelectSchema>;

type Props = {
  selectedCountry: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
};

const CountrySelect = ({ selectedCountry, onChange }: Props) => {
  const { getAll } = useCountries();
  const options = [
    { value: '', label: 'Select country' },
    ...getAll().map(({ value, label }) => ({ value, label })),
  ];

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value) {
      onChange(defaultCountryOption);
      return;
    }
    const selectedItem = getAll().find(
      country => country.value === e.target.value
    );
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
