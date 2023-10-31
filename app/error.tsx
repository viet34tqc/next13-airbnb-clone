'use client'; // Error components must be Client Components

import ErrorMessage from '@/components/shared/ErrorMessage';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return <ErrorMessage title="Uh Oh" subtitle="Something went wrong!" />;
}
