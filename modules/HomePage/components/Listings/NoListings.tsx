'use client';

import ErrorMessage from '@/components/shared/ErrorMessage';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

/**
 * We need this component because `useRouter` only available in client component.
 */
const NoListings = () => {
  const router = useRouter();

  return (
    <ErrorMessage
      title="No exact matches"
      subtitle="Try changing or removing some of your filters."
    >
      <div className="w-48 mt-4">
        {
          <Button isOutline onClick={() => router.push('/')}>
            Remove all filters
          </Button>
        }
      </div>
    </ErrorMessage>
  );
};

export default NoListings;
