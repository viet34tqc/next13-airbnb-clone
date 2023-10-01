'use client';

import { cn } from '@/lib/utils';
import { HeartIcon } from '@heroicons/react/24/outline';
import { User } from '@prisma/client';
import useFavorite from './hooks/useFavorite';

// This component use a hook (client component) => it must be client component
// => we cannot call `getCurrentUser` here
// => We need to pass down current User from ListingCard
type Props = {
  currentUser: User | null;
  listingId: string;
};

const FavoriteButton = ({ currentUser, listingId }: Props) => {
  const { isLoading, isFavorite, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });

  return (
    <button
      disabled={isLoading}
      className=" relative hover:opacity-80 transition"
      onClick={toggleFavorite}
    >
      <HeartIcon
        className={cn('h-6 w-6 text-white', { 'fill-white': isFavorite })}
      />
    </button>
  );
};

export default FavoriteButton;
