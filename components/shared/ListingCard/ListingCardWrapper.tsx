import { Listing } from '@prisma/client';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

type Props = {
  listingId: Listing['id'];
};

const ListingCardWrapper = async ({
  listingId,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Link href={`/listings/${listingId}`}>
      <div className="flex flex-col gap-2">{children}</div>
    </Link>
  );
};

export default ListingCardWrapper;
