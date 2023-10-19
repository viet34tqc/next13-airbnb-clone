import ListingFavoriteButton from '@/components/shared/ListingCard/ListingFavoriteButton';
import PageHeader from '@/components/shared/PageHeader';
import useCountries from '@/hooks/useCountries';
import { UserOrNull } from '@/lib/types/auth';
import Image from 'next/image';

type Props = {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser: UserOrNull;
};

const ListingHead = ({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser,
}: Props) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <>
      <PageHeader
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div
        className="
          w-full
          h-[60vh]
          overflow-hidden
          rounded-xl
          relative
        "
      >
        <Image
          src={imageSrc}
          fill
          className="object-cover w-full"
          alt="Image"
        />
        <div
          className="
            absolute
            top-5
            right-5
          "
        >
          <ListingFavoriteButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
