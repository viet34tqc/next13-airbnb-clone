import ErrorMessage from '@/components/shared/ErrorMessage';
import TripsView from '@/modules/TripsPage/components/TripsView';
import getCurrentUser from '../actions/getCurrentUser';
import getReservations from '../actions/getReservations';

const TripsPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return <ErrorMessage title="Unauthorized" subtitle="login"></ErrorMessage>;
  }
  const reservations = await getReservations({ userId: currentUser.id });

  if (!reservations.length) {
    return (
      <ErrorMessage
        title="No trips found"
        subtitle="Looks like you havent reserved any trips."
      ></ErrorMessage>
    );
  }
  return (
    <main className="py-16 md:p-16">
      <TripsView currentUser={currentUser} reservations={reservations} />
    </main>
  );
};

export default TripsPage;
