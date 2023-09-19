'use client';

import useCountries from '@/hooks/useCountries';
import { ChangeEvent } from 'react';
import Select from '../ui/Form/Select';

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

type Props = {
  onChange: (value: CountrySelectValue) => void;
};

const CountrySelect = ({ onChange }: Props) => {
  const { getAll } = useCountries();
  const options = [
    { value: '', label: 'Select country' },
    ...getAll().map(({ value, label }) => ({ value, label })),
  ];

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
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
        options={options}
        onChange={handleChange}
      />
    </div>
  );
};

export default CountrySelect;
