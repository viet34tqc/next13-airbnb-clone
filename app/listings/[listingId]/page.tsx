import getCurrentUser from '@/app/actions/getCurrentUser';
import getListingById from '@/app/actions/getListingById';
import getReservations from '@/app/actions/getReservations';
import ErrorMessage from '@/components/shared/ErrorMessage';
import ListingView from '@/modules/ListingPage/components/ListingView';
import { Listing } from '@prisma/client';

type Props = {
  params: {
    listingId: Listing['id'];
  };
};

export async function generateMetadata({ params: { listingId } }: Props) {
  const listing = await getListingById(listingId);
  return {
    title: listing?.title,
    description: listing?.description,
  };
}

const ListingPage = async ({ params: { listingId } }: Props) => {
  const listing = await getListingById(listingId);
  /// We get reservations of the listing to disable those day on the calendar
  const reservations = await getReservations({ listingId });
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ErrorMessage title="No data" subtitle="Please try again"></ErrorMessage>
    );
  }

  return (
    <main className="py-10">
      <ListingView
        listing={listing}
        currentUser={currentUser}
        reservations={reservations}
      />
    </main>
  );
};

export default ListingPage;
