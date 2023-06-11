'use client';

import { signIn, signOut } from 'next-auth/react';

type Props = {};

const Buttons = (props: Props) => {
  return (
    <div>
      <button onClick={() => signIn()}>Sign In with credentials</button>
      <button onClick={() => signIn('google')}>Sign In with Google</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default Buttons;
