import Categories from '@/modules/HomePage/components/Categories/Categories';
import Listings from '@/modules/HomePage/components/Listings';

export default function Home() {
  return (
    <>
      <Categories />
      <main className="flex min-h-screen flex-col items-center justify-between py-16 md:p-16">
        <Listings />
      </main>
    </>
  );
}
