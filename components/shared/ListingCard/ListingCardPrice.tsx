import { formatUSDPrice } from '@/lib/utils';
import { Listing } from '@prisma/client';

type Props = {
  price: Listing['price'];
};

const ListingCardPrice = ({ price }: Props) => {
  return (
    <div className="flex gap-1">
      <span className="font-semibold">{formatUSDPrice(price)}</span>
      <span className="font-light"> / night</span>
    </div>
  );
};

export default ListingCardPrice;
