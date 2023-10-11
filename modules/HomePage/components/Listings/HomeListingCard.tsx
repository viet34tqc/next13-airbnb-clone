import ListingCard from '@/components/shared/ListingCard';
import ListingCardCategory from '@/components/shared/ListingCard/ListingCardCategory';
import ListingCardImg from '@/components/shared/ListingCard/ListingCardImg';
import ListingCardLocation from '@/components/shared/ListingCard/ListingCardLocation';
import ListingCardPrice from '@/components/shared/ListingCard/ListingCardPrice';
import { Listing, User } from '@prisma/client';

type Props = {
  data: Listing;
  currentUser: User | null;
};

const HomeListingCard = async ({ data, currentUser }: Props) => {
  return (
    <ListingCard listingId={data.id}>
      <ListingCardImg
        imageSrc={data.imageSrc}
        currentUser={currentUser}
        listingId={data.id}
      />
      <ListingCardLocation locationValue={data.locationValue} />
      <ListingCardCategory category={data.category} />
      <ListingCardPrice price={data.price} />
    </ListingCard>
  );
};

export default HomeListingCard;
