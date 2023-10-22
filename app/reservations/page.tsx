import ErrorMessage from '@/components/shared/ErrorMessage';
import PageHeader from '@/components/shared/PageHeader';
import TripsView from '@/modules/TripsPage/components/TripsView';
import { Metadata } from 'next';
import getCurrentUser from '../actions/getCurrentUser';
import getReservations from '../actions/getReservations';

export const metadata: Metadata = {
  title: 'Reservations',
  description: 'All the reservations for your listing',
};

const ReservationsPage = async () => {
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
    <main className="py-10">
      <TripsView reservations={reservations}>
        <PageHeader
          title="Reservations"
          subtitle="Bookings on your properties"
        />
      </TripsView>
    </main>
  );
};

export default ReservationsPage;
