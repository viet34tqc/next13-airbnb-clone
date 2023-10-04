'use client';

import Calendar from '@/components/shared/Calendar';
import Button from '@/components/ui/Button';
import { Listing, User } from '@prisma/client';
import { useState } from 'react';
import { Range } from 'react-date-range';

interface Props {
  listing: Listing & { user: User };
}

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
};

const ListingReservation = ({ listing }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(listing.price);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);

  const disabledDates = useMemo(() => {
    let dates: Date[] = [];

    reservations.forEach((reservation: any) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate),
      });

      dates = [...dates, ...range];
    });

    return dates;
  }, [reservations]);

  return (
    <div
      className="
      bg-white
        rounded-xl
        border-[1px]
      border-neutral-200
        overflow-hidden
      "
    >
      <div
        className="
      flex flex-row items-center gap-1 p-4"
      >
        <div className="text-2xl font-semibold">$ {listing.price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={value => setDateRange(value.selection)}
      />
      <hr />
      <Button className="p-4" disabled={disabled} onClick={onSubmit}>
        Reserve
      </Button>
      <hr />
      <div
        className="
          p-4
          flex
          flex-row
          items-center
          justify-between
          font-semibold
          text-lg
        "
      >
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  );
};

export default ListingReservation;
