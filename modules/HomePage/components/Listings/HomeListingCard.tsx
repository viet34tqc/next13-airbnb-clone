import ListingCardCategory from '@/components/shared/ListingCard/ListingCardCategory';
import ListingCardImg from '@/components/shared/ListingCard/ListingCardImg';
import ListingCardLocation from '@/components/shared/ListingCard/ListingCardLocation';
import ListingCardPrice from '@/components/shared/ListingCard/ListingCardPrice';
import ListingCardWrapper from '@/components/shared/ListingCard/ListingCardWrapper';
import ListingFavoriteButton from '@/components/shared/ListingCard/ListingFavoriteButton';
import { UserOrNull } from '@/lib/types/auth';
import { Listing } from '@prisma/client';

type Props = {
  listing: Listing;
  currentUser: UserOrNull;
  index: number;
};

const HomeListingCard = async ({ listing, currentUser, index }: Props) => {
  return (
    <ListingCardWrapper listingId={listing.id}>
      <div className="relative">
        <ListingCardImg imageSrc={listing.imageSrc} priority={index === 0} />
        <div
          className="
          absolute
          top-3
          right-3
        "
        >
          <ListingFavoriteButton
            currentUser={currentUser}
            listingId={listing.id}
          />
        </div>
      </div>
      <ListingCardLocation locationValue={listing.locationValue} />
      <ListingCardCategory category={listing.category} />
      <ListingCardPrice price={listing.price} />
    </ListingCardWrapper>
  );
};

export default HomeListingCard;
