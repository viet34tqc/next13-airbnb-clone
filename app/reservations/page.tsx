import ErrorMessage from '@/components/shared/ErrorMessage';
import ErrorMessageWithLogin from '@/components/shared/ErrorMessageWithLogin';
import ModalHeading from '@/components/ui/Modal/ModalHeading';
import TripsView from '@/modules/TripsPage/components/TripsView';
import getCurrentUser from '../actions/getCurrentUser';
import getReservations from '../actions/getReservations';

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <ErrorMessageWithLogin title="Unauthorized" subtitle="Please login" />
    );
  }
  const reservations = await getReservations({ authorId: currentUser.id });

  if (!reservations.length) {
    return (
      <ErrorMessage
        title="No reservations found"
        subtitle="Looks like you have no reservations on your properties."
      ></ErrorMessage>
    );
  }
  return (
    <main className="py-16 md:p-16">
      <TripsView currentUser={currentUser} reservations={reservations}>
        <ModalHeading
          title="Reservations"
          subtitle="Bookings on your properties"
        />
      </TripsView>
    </main>
  );
};

export default ReservationsPage;
