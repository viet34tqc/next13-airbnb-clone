import { formatUSDPrice } from '@/lib/utils';
import { Listing } from '@prisma/client';

type Props = {
  price: Listing['price'];
};

// Used in ReservationListingCard
const ListingCardTotalPrice = ({ price }: Props) => {
  return <span className="font-semibold">{formatUSDPrice(price)}</span>;
};

export default ListingCardTotalPrice;
