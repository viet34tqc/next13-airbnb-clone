import Button from '@/components/ui/Button';
import { signIn } from 'next-auth/react';
import { PropsWithChildren } from 'react';

const AuthFormFooter = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button isOutline onClick={() => signIn('google')}>
        Continue with Google
      </Button>
      <Button isOutline onClick={() => signIn('github')}>
        Continue with Github
      </Button>
      <div
        className="
          text-neutral-500
          text-center
          mt-4
          font-light
        "
      >
        {children}
      </div>
    </div>
  );
};

export default AuthFormFooter;
