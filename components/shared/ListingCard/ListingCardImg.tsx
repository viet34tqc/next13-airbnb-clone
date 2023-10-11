import FavoriteButton from '@/modules/HomePage/components/Listings/FavoriteButton';
import { Listing, User } from '@prisma/client';
import Image from 'next/image';

type Props = {
  imageSrc: Listing['imageSrc'];
  listingId: Listing['id'];
  currentUser: User | null;
};

const ListingCardImg = ({ imageSrc, currentUser, listingId }: Props) => {
  return (
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
        src={imageSrc}
        alt="Listing"
      />
      {currentUser && (
        <div
          className="
          absolute
          top-3
          right-3
        "
        >
          <FavoriteButton currentUser={currentUser} listingId={listingId} />
        </div>
      )}
    </div>
  );
};

export default ListingCardImg;
