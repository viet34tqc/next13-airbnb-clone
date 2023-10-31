import ErrorMessage from '@/components/shared/ErrorMessage';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <ErrorMessage
      title="Not Found"
      subtitle="Could not find requested resource"
    >
      <Button>
        <Link href="/">Return Home</Link>
      </Button>
    </ErrorMessage>
  );
}
