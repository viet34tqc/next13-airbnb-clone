import FavoritesView from '@/app/favorites/FavoritesView';
import PageHeader from '@/components/shared/PageHeader';
import SkeletonGrid from '@/components/ui/SkeletonGrid';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Favorites Listings',
  description: 'Your favorite listings',
};

const FavoritesPage = async () => {
  return (
    <main className="py-10">
      <PageHeader title="Favorites" subtitle="List of your favorite listings" />
      <Suspense fallback={<SkeletonGrid />}>
        <FavoritesView />
      </Suspense>
    </main>
  );
};

export default FavoritesPage;
