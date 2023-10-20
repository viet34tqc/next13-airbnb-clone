'use client';

import { UserOrNull } from '@/lib/types/auth';
import { cn } from '@/lib/utils';
import { HeartIcon } from '@heroicons/react/24/outline';
import { Listing } from '@prisma/client';
import { LoaderIcon } from 'react-hot-toast';
import useFavorite from '../../../modules/HomePage/hooks/useFavorite';

type Props = {
  currentUser: UserOrNull;
  listingId: Listing['id'];
};

const ListingFavoriteButton = ({ currentUser, listingId }: Props) => {
  const { isLoading, isFavorite, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });

  if (isLoading) return <LoaderIcon className="!w-5 !h-5" />;

  return (
    <button
      className=" relative hover:opacity-80 transition"
      onClick={e => {
        // This is used to click through the link wrapper
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite();
      }}
    >
      <HeartIcon
        className={cn('h-6 w-6 text-white', { 'fill-white': isFavorite })}
      />
    </button>
  );
};

export default ListingFavoriteButton;
