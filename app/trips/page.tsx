import ErrorMessage from '@/components/shared/ErrorMessage';
import PageHeader from '@/components/shared/PageHeader';
import TripsView from '@/modules/TripsPage/components/TripsView';
import { Metadata } from 'next';
import getCurrentUser from '../actions/getCurrentUser';
import getReservations from '../actions/getReservations';

export const metadata: Metadata = {
  title: 'Trips',
  description: 'Your recent reservations',
};

const TripsPage = async () => {
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
    <main className="py-16 md:p-16">
      <TripsView currentUser={currentUser} reservations={reservations}>
        <PageHeader
          title="Trips"
          subtitle="Where you've been and where you're going"
        />
      </TripsView>
    </main>
  );
};

export default TripsPage;
