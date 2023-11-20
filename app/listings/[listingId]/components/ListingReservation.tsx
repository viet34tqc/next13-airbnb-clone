'use client';

import Calendar from '@/components/shared/Calendar';
import Button from '@/components/ui/Button';
import { UserOrNull } from '@/lib/types/auth';
import { useModalStoreActions } from '@/store/useModalStore';
import { Listing, Reservation, User } from '@prisma/client';
import { differenceInDays, eachDayOfInterval } from 'date-fns';
import { useEffect, useState } from 'react';
import { Range } from 'react-date-range';
import { useFormState, useFormStatus } from 'react-dom';
import toast from 'react-hot-toast';
import { createReservation } from '../actions';

interface Props {
  listing: Listing & { user: User };
  currentUser: UserOrNull;
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

const CreateReservationButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="block my-4 w-full" disabled={pending}>
      {pending ? 'Reserving' : 'Reserve'}
    </Button>
  );
};

const ListingReservation = ({ listing, currentUser, reservations }: Props) => {
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const { setModalView } = useModalStoreActions();

  const reservedDates = getReservedDate(reservations);
  const totalPrice = getTotalPrice(dateRange, listing.price);

  const createReservationWithData = createReservation.bind(null, {
    totalPrice,
    startDate: dateRange.startDate,
    endDate: dateRange.endDate,
    listingId: listing?.id,
  });
  const [state, dispatch] = useFormState(createReservationWithData, {
    validationErrors: {},
    message: undefined,
  });

  useEffect(() => {
    if (state.message) {
      toast(state.message);
    }
  }, [state]);

  const handleCreateReservation = async () => {
    if (!currentUser) {
      return setModalView('LOGIN');
    }
    dispatch({
      totalPrice,
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
      listingId: listing?.id,
    });
  };

  return (
    <form
      action={handleCreateReservation}
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
        ranges={[dateRange]}
        disabledDates={reservedDates}
        onChange={rangeKeyDict => setDateRange(rangeKeyDict.selection)}
      />

      {state.validationErrors ? (
        <div
          id="customer-error"
          aria-live="polite"
          className="mt-2 text-sm text-red-500"
        >
          {Object.values(state.validationErrors)
            .flat()
            .map((error: string) => (
              <p key={error}>{error}</p>
            ))}
        </div>
      ) : null}
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
      </div>
      <CreateReservationButton />
    </form>
  );
};

export default ListingReservation;
