import PageHeader from '@/components/shared/PageHeader';
import SkeletonGrid from '@/components/ui/SkeletonGrid';
import PropertiesView from '@/app/properties/components/PropertiesView';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Properties',
  description: 'List of your own listings',
};

const PropertiesPage = async () => {
  return (
    <main className="py-10">
      <PageHeader title="Properties" subtitle="List of your properties" />
      <Suspense fallback={<SkeletonGrid />}>
        <PropertiesView />
      </Suspense>
    </main>
  );
};

export default PropertiesPage;
