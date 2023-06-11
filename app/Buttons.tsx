'use client';

import { signIn, signOut } from 'next-auth/react';

type Props = {};

const Buttons = (props: Props) => {
  return (
    <div>
      <button onClick={() => signIn()}>Sign In</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default Buttons;
