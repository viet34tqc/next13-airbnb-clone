import getCurrentUser from '@/app/actions/getCurrentUser';
import getListingById from '@/app/actions/getListingById';
import ErrorMessage from '@/components/shared/ErrorMessage';
import ListingView from '@/modules/ListingPage/components/ListingView';

type Props = {
  params: {
    listingId: string;
  };
};

const ListingPage = async ({ params: { listingId } }: Props) => {
  const listing = await getListingById(listingId);
  const currentUser = await getCurrentUser();

  if (!listing || !currentUser) {
    return (
      <ErrorMessage title="No data" subtitle="Please try again"></ErrorMessage>
    );
  }

  return <ListingView listing={listing} currentUser={currentUser} />;
};

export default ListingPage;
