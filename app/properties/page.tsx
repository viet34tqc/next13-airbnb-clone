import ErrorMessage from '@/components/shared/ErrorMessage';
import ErrorMessageWithLogin from '@/components/shared/ErrorMessageWithLogin';
import Button from '@/components/ui/Button';
import PropertiesView from '@/modules/PropertiesPage/PropertiesView';
import Link from 'next/link';
import getCurrentUser from '../actions/getCurrentUser';
import getListings from '../actions/getListings';

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <ErrorMessageWithLogin title="Unauthorized" subtitle="Please login" />
    );
  }
  const listings = await getListings({ userId: currentUser.id });

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
    <main className="py-16 md:p-16">
      <PropertiesView listings={listings} currentUser={currentUser} />
    </main>
  );
};

export default PropertiesPage;
