import getCurrentUser from '@/app/actions/getCurrentUser';
import useCountries from '@/hooks/useCountries';
import { Listing } from '@prisma/client';
import Image from 'next/image';
import FavoriteButton from './FavoriteButton';

type Props = {
  data: Listing;
};

const ListingCard = async ({ data }: Props) => {
  const currentUser = await getCurrentUser();

  const { getByValue } = useCountries();
  const location = getByValue(data.locationValue);
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 3,
  });
  return (
    <div className="flex flex-col gap-2">
      <div className="aspect-square group relative overflow-hidden rounded-xl">
        <Image
          fill
          sizes="(min-width: 768px) 50vw, (min-width: 1200px) 20vw, 100vw"
          className="
              object-cover
              h-full
              w-full
              group-hover:scale-110
              transition
            "
          src={data.imageSrc}
          alt="Listing"
        />
        <div
          className="
            absolute
            top-3
            right-3
          "
        >
          <FavoriteButton currentUser={currentUser} listingId={data.id} />
        </div>
      </div>
      <div className="font-semibold text-lg">
        {location?.region}, {location?.label}
      </div>
      <div className="font-light text-neutral-500">{data.category}</div>
      <span className="font-semibold">{USDollar.format(data.price)}</span>
    </div>
  );
};

export default ListingCard;
