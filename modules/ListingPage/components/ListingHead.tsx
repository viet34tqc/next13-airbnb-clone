import ModalHeading from '@/components/ui/Modal/ModalHeading';
import useCountries from '@/hooks/useCountries';
import FavoriteButton from '@/modules/HomePage/components/Listings/FavoriteButton';
import { User } from '@prisma/client';
import Image from 'next/image';

type Props = {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser: User | null;
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
      <ModalHeading
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
          <FavoriteButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
