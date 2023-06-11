import Buttons from './Buttons';
import Header from './Header';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Buttons />
    </main>
  );
}
