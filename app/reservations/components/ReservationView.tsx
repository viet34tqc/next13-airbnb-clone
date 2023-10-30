import getCurrentUser from '@/app/actions/getCurrentUser';
import getReservations from '@/app/actions/getReservations';
import TripsListingCard from '@/app/trips/components/TripsListingCard';
import ErrorMessage from '@/components/shared/ErrorMessage';
import GridListingLayout from '@/components/shared/GridListingLayout';

const ReservationView = async () => {
  const currentUser = await getCurrentUser();
  // This code is no longer needed because I replace it with nextjs middleware
  /* if (!currentUser) {
    return (
      <ErrorMessageWithLogin title="Unauthorized" subtitle="Please login" />
    );
  } */
  const reservations = currentUser
    ? await getReservations({ authorId: currentUser.id })
    : [];

  if (!reservations.length) {
    return (
      <ErrorMessage
        title="No reservations found"
        subtitle="Looks like you have no reservations on your properties."
      ></ErrorMessage>
    );
  }
  return (
    <>
      <GridListingLayout>
        {reservations.map((reservation, index) => (
          <TripsListingCard
            key={reservation.id}
            listing={reservation.listing}
            index={index}
            reservation={reservation}
          />
        ))}
      </GridListingLayout>
    </>
  );
};

export default ReservationView;
