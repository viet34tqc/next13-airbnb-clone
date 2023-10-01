import { User } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import HeaderSearch from './HeaderSearch';
import UserMenu from './UserMenu/UserMenu';

type Props = {
  user: User | null;
};

const SiteHeader = ({ user }: Props) => {
  return (
    <header className="sticky bg-white z-10 shadow-sm py-4">
      <div className="container flex justify-between">
        <Link href="/" className="hidden md:flex items-center cursor-pointer">
          <Image
            src="/logo.png"
            alt="Site Logo"
            width={100}
            height={31}
            loading="eager"
            priority={true}
          />
        </Link>
        <HeaderSearch />
        <UserMenu user={user} />
      </div>
    </header>
  );
};

export default SiteHeader;
