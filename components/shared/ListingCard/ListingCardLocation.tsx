import useCountries from '@/hooks/useCountries';
import { Listing } from '@prisma/client';

type Props = {
  locationValue: Listing['locationValue'];
};

const ListingCardLocation = ({ locationValue }: Props) => {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);

  return (
    <div className="font-semibold text-lg">
      {location?.region}, {location?.label}
    </div>
  );
};

export default ListingCardLocation;
