import { Listing } from '@prisma/client';

type Props = {
  category: Listing['category'];
};

const ListingCardCategory = ({ category }: Props) => {
  return <div className="font-light text-neutral-500">{category}</div>;
};

export default ListingCardCategory;
