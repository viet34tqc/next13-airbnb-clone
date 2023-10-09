import { Listing } from '@prisma/client';

type Props = {
  price: Listing['price'];
};

const ListingCardPrice = ({ price }: Props) => {
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 3,
  });
  return <span className="font-semibold">{USDollar.format(price)}</span>;
};

export default ListingCardPrice;
