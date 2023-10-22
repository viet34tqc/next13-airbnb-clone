import ErrorMessage from '@/components/shared/ErrorMessage';
import Button from '@/components/ui/Button';
import PropertiesView from '@/modules/PropertiesPage/components/PropertiesView';
import { Metadata } from 'next';
import Link from 'next/link';
import getCurrentUser from '../actions/getCurrentUser';
import getListings from '../actions/getListings';

export const metadata: Metadata = {
  title: 'Properties',
  description: 'List of your own listings',
};

const PropertiesPage = async () => {
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
    <main className="py-10">
      <PropertiesView listings={listings} currentUser={currentUser} />
    </main>
  );
};

export default PropertiesPage;
