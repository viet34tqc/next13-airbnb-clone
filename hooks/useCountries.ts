import countries from '@/lib/countries.min.json';

const formattedCountries = Object.fromEntries(
  countries.map(country => [
    country.alpha2,
    {
      value: country.alpha2,
      label: country.country,
      latlng: [country.latitude, country.longitude],
    },
  ])
);

const useCountries = () => {
  const getOptions = Object.values(formattedCountries).map(country => ({
    value: country.value,
    label: country.label,
  }));

  const getByValue = (value: string) => {
    return formattedCountries[value];
  };

  return {
    getOptions,
    getByValue,
  };
};

export default useCountries;
