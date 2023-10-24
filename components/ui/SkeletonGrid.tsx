import GridListingLayout from '@/components/shared/GridListingLayout';
import { SkeletonCard } from '@/components/ui/SkeletonCard';

export default function SkeletonGrid() {
  return (
    <GridListingLayout>
      {Array.from({ length: 10 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </GridListingLayout>
  );
}
