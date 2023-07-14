import Image from 'next/image';
import Link from 'next/link';
import HeaderSearch from './HeaderSearch';
import UserMenu from './UserMenu';

type Props = {};

const SiteHeader = (props: Props) => {
  return (
    <header className="sticky bg-white z-10 shadow-sm py-4">
      <div className="container flex justify-between">
        <Link href="/" className="hidden md:block cursor-pointer">
          <Image src="/logo.png" alt="Site Logo" width={100} height={100} />
        </Link>
        <HeaderSearch />
        <UserMenu />
      </div>
    </header>
  );
};

export default SiteHeader;