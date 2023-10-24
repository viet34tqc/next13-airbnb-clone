import GridListingLayout from '@/components/shared/GridListingLayout';
import { SkeletonCard } from '@/components/ui/SkeletonCard';

export default function Loading() {
  return (
    <main className="py-10">
      <GridListingLayout>
        <SkeletonCard isLoading={true} />
        <SkeletonCard isLoading={true} />
        <SkeletonCard isLoading={true} />
        <SkeletonCard isLoading={true} />
        <SkeletonCard isLoading={true} />
        <SkeletonCard isLoading={true} />
      </GridListingLayout>
    </main>
  );
}
