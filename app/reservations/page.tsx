import PageHeader from '@/components/shared/PageHeader';
import Loading from '@/components/ui/loading';
import ReservationView from '@/modules/ReservationPage/components/ReservationView';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Reservations',
  description: 'All the reservations for your listing',
};

const ReservationsPage = async () => {
  return (
    <main className="py-10">
      <PageHeader title="Reservations" subtitle="Bookings on your properties" />
      <Suspense fallback={<Loading />}>
        <ReservationView />
      </Suspense>
    </main>
  );
};

export default ReservationsPage;
