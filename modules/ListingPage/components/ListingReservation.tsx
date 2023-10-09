'use client';

import Calendar from '@/components/shared/Calendar';
import Button from '@/components/ui/Button';
import { useModalStoreActions } from '@/store/useModalStore';
import { Listing, Reservation, User } from '@prisma/client';
import { differenceInDays, eachDayOfInterval } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Range } from 'react-date-range';
import toast from 'react-hot-toast';

interface Props {
  listing: Listing & { user: User };
  currentUser: User | null;
  reservations: Reservation[];
}

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
};

const getReservedDate = (reservations: Reservation[]) => {
  let dates: Date[] = [];

  reservations?.forEach((reservation: any) => {
    const range = eachDayOfInterval({
      start: new Date(reservation.startDate),
      end: new Date(reservation.endDate),
    });

    dates = [...dates, ...range];
  });

  return dates;
};

const getTotalPrice = (dateRange: Range, listingPrice: number) => {
  if (dateRange.startDate && dateRange.endDate) {
    const dayCount = differenceInDays(dateRange.endDate, dateRange.startDate);

    if (dayCount && listingPrice) {
      return dayCount * listingPrice;
    }
    return listingPrice;
  }
};

const ListingReservation = ({ listing, currentUser, reservations }: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const { setModalView } = useModalStoreActions();

  const reservedDates = getReservedDate(reservations);
  const totalPrice = getTotalPrice(dateRange, listing.price);

  // TODO: tidy up API
  const handleCreateReservation = async () => {
    if (!currentUser) {
      return setModalView('LOGIN');
    }
    setIsLoading(true);
    try {
      const res = await fetch('/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          totalPrice,
          startDate: dateRange.startDate,
          endDate: dateRange.endDate,
          listingId: listing?.id,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setIsLoading(false);
        throw Error(data.message);
      }
      toast.success('Listing reserved!');
      router.push('/trips'); // go to trips page to see all the successful reservation of this user.
      setDateRange(initialDateRange);
    } catch (error) {
      toast(error instanceof Error ? error.message : 'Failed to make reservation');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="
        rounded-xl
        border-[1px]
      border-neutral-200
      "
    >
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {listing.price}</div>
        <div className="font-light text-neutral-600">per night</div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={reservedDates}
        onChange={value => setDateRange(value.selection)}
      />
      <hr />
      <div
        className="
          p-4
          flex
          flex-row
          items-center
          justify-between
          flex-wrap
          font-semibold
          text-lg
        "
      >
        <div>Total</div>
        <div>$ {totalPrice}</div>
        <Button
          className="block my-4 w-full"
          disabled={isLoading}
          onClick={handleCreateReservation}
        >
          Reserve
        </Button>
      </div>
    </div>
  );
};

export default ListingReservation;
