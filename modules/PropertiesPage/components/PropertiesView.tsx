import GridListingLayout from '@/components/shared/GridListingLayout';
import PageHeader from '@/components/shared/PageHeader';
import { UserOrNull } from '@/lib/types/auth';
import { Listing } from '@prisma/client';
import PropertiesListingCard from './PropertiesListingCard';

type Props = {
  listings: Array<Listing>;
  currentUser: UserOrNull;
};

const PropertiesView = ({ listings, currentUser }: Props) => {
  return (
    <>
      <PageHeader title="Properties" subtitle="List of your properties" />
      <GridListingLayout>
        {listings.map(listing => (
          <PropertiesListingCard
            key={listing.id}
            listing={listing}
            currentUser={currentUser}
          />
        ))}
      </GridListingLayout>
    </>
  );
};

export default PropertiesView;
