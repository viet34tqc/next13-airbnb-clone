import PageHeader from '@/components/shared/PageHeader';
import Loading from '@/components/ui/loading';
import TripsView from '@/modules/TripsPage/components/TripsView';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Trips',
  description: 'Your recent reservations',
};

const TripsPage = async () => {
  return (
    <main className="py-10">
      <PageHeader
        title="Trips"
        subtitle="Where you've been and where you're going"
      />
      <Suspense fallback={<Loading />}>
        <TripsView />
      </Suspense>
    </main>
  );
};

export default TripsPage;
