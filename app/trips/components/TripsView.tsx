import getCurrentUser from '@/app/actions/getCurrentUser';
import getReservations from '@/app/actions/getReservations';
import ErrorMessage from '@/components/shared/ErrorMessage';
import GridListingLayout from '@/components/shared/GridListingLayout';
import TripsListingCard from './TripsListingCard';

const TripsView = async () => {
  const currentUser = await getCurrentUser();

  // This code is no longer needed because I replace it with nextjs middleware
  /* if (!currentUser) {
    return (
      <ErrorMessageWithLogin title="Unauthorized" subtitle="Please login" />
    );
  } */
  const reservations = currentUser
    ? await getReservations({ userId: currentUser.id })
    : [];

  if (!reservations.length) {
    return (
      <ErrorMessage
        title="No trips found"
        subtitle="Looks like you havent reserved any trips."
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

export default TripsView;
