import getCurrentUser from '@/app/actions/getCurrentUser';
import getListings from '@/app/actions/getListings';
import ErrorMessage from '@/components/shared/ErrorMessage';
import GridListingLayout from '@/components/shared/GridListingLayout';
import PageHeader from '@/components/shared/PageHeader';
import Button from '@/components/ui/Button';
import { UserOrNull } from '@/lib/types/auth';
import { Listing } from '@prisma/client';
import Link from 'next/link';
import PropertiesListingCard from './PropertiesListingCard';

const PropertiesView = async () => {
  const currentUser = await getCurrentUser();
  // This code is no longer needed because I replace it with nextjs middleware
  /* if (!currentUser) {
    return (
      <ErrorMessageWithLogin title="Unauthorized" subtitle="Please login" />
    );
  } */
  const listings = currentUser
    ? await getListings({ userId: currentUser.id })
    : [];

  if (!listings.length) {
    return (
      <ErrorMessage
        title="No properties found"
        subtitle="Looks like you have no properties."
      >
        <Link href="/">
          <Button>Go to homepage</Button>
        </Link>
      </ErrorMessage>
    );
  }
  return (
    <>
      <GridListingLayout>
        {listings.map((listing, index) => (
          <PropertiesListingCard
            key={listing.id}
            listing={listing}
            currentUser={currentUser}
            index={index}
          />
        ))}
      </GridListingLayout>
    </>
  );
};

export default PropertiesView;
