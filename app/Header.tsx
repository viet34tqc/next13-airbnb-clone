'use client';
import { useSession } from 'next-auth/react';

type Props = {};

const Header = (props: Props) => {
  const session = useSession();
  console.log('session', session);
  return <div>{session?.data?.user?.name}</div>;
};

export default Header;
