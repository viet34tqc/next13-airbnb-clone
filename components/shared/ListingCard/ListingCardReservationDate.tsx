import { Reservation } from '@prisma/client';
import { format } from 'date-fns';

type Props = {
  reservation: Reservation;
};

const getReservationDate = (reservation: Reservation) => {
  if (!reservation) {
    return null;
  }

  const start = new Date(reservation.startDate);
  const end = new Date(reservation.endDate);

  return `${format(start, 'PP')} - ${format(end, 'PP')}`;
};

const ListingCardReservationDate = ({ reservation }: Props) => {
  const reservationDate = getReservationDate(reservation);

  return <div className="font-light text-neutral-500">{reservationDate}</div>;
};

export default ListingCardReservationDate;
