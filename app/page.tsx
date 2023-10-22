import { ListingsParams } from '@/lib/types/listings';
import Categories from '@/modules/HomePage/components/Categories/Categories';
import Listings from '@/modules/HomePage/components/Listings';
import NoListings from '@/modules/HomePage/components/Listings/NoListings';
import { Metadata } from 'next';
import getCurrentUser from './actions/getCurrentUser';
import getListings from './actions/getListings';

export const metadata: Metadata = {
  title: 'YAAC-Yet another AirBnb clone',
  description: 'Yet another AirBnb clone',
};

export default async function Home({
  // Must be searchParams, not params, otherwise it wont work
  searchParams,
}: {
  searchParams: ListingsParams;
}) {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (!listings || !listings.length) {
    return <NoListings />;
  }
  return (
    <>
      <Categories />
      <main className="flex min-h-screen flex-col items-center justify-between py-10">
        <Listings listings={listings} currentUser={currentUser} />
      </main>
    </>
  );
}
