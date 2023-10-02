'use client';

import useModalStore from '@/store/useModalStore';
import { User } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

type Props = {
  listingId: string;
  currentUser: User | null;
};

/**
 * @returns toggleFavorite toggle favorite for listing
 * @returns favoriteState favoriteState of the listing
 */
const useFavorite = ({ listingId, currentUser }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    actions: { setModalView },
  } = useModalStore();

  const favoriteListings = currentUser?.favoriteListings || [];
  const isFavorite = favoriteListings.includes(listingId);

  const toggleFavorite = async () => {
    setIsLoading(true);

    try {
      if (!currentUser) {
        return setModalView('LOGIN');
      }
      let request;
      if (isFavorite) {
        request = fetch(`/api/favoriteListing/${listingId}`, {
          method: 'delete',
        });
      } else {
        request = fetch(`/api/favoriteListing/${listingId}`, {
          method: 'put',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ listingId }),
        });
      }
      const res = await request;
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message);
      }
      router.refresh();
    } catch (error) {
      if (error instanceof Error) {
        toast(error.message);
      } else {
        toast('Update favoriteListings failed');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { isFavorite, toggleFavorite, isLoading };
};

export default useFavorite;
