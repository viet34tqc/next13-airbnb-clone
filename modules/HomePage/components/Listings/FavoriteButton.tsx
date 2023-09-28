'use client';

import { HeartIcon } from '@heroicons/react/24/outline';

type Props = {
  listingId: string;
};

const FavoriteButton = (props: Props) => {
  return (
    <div
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
    >
      <HeartIcon
        className="h-6 w-6 absolute
          -top-[2px]
          -right-[2px] text-white"
      />
    </div>
  );
};

export default FavoriteButton;
