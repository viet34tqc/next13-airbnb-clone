import SkeletonGrid from '@/components/ui/SkeletonGrid';
import { ListingsParams } from '@/lib/types/listings';
import { Metadata } from 'next';
import { Suspense } from 'react';
import Categories from './home/components/Categories';
import Listings from './home/components/Listings';

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
  return (
    <>
      <main className="flex flex-col gap-10 pb-10">
        <Categories />
        <Suspense fallback={<SkeletonGrid />}>
          <Listings searchParams={searchParams} />
        </Suspense>
      </main>
    </>
  );
}
