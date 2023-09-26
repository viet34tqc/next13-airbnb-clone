import Button from '@/components/ui/Button';
import FieldControl from '@/components/ui/Form/FieldControl';
import FieldMess from '@/components/ui/Form/FieldMess';
import Input from '@/components/ui/Form/Input';
import Label from '@/components/ui/Form/Label';
import ModalHeading from '@/components/ui/Modal/ModalHeading';
import { useModalStoreActions } from '@/store/useModalStore';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import type { z } from 'zod';
import { loginSchema } from '../authSchema';
import AuthFormFooter from './OauthLogin';

type TLoginInputs = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const { setModalView } = useModalStoreActions();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const methods = useForm<TLoginInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { register, handleSubmit } = methods;

  const onSubmit = (data: TLoginInputs) => {
    setIsLoading(true);

    signIn('credentials', {
      ...data,
      redirect: false,
    }).then(callback => {
      setIsLoading(false);

      if (callback?.error) {
        if (callback.error === 'CredentialsSignin') {
          toast.error('Wrong credentials'); // TODO: put this into constants
        } else {
          toast.error(callback.error);
        }
      } else {
        toast.success('Logged in');
        setModalView(null);
        router.refresh();
      }
    });
  };
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <ModalHeading
              title="Welcome back"
              subtitle="Login to your account!"
            />
            <FieldControl>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  disabled={isLoading}
                  {...register('email')}
                  required
                />
                <Label htmlFor="email">Email Address</Label>
              </div>
              <FieldMess name="email" />
            </FieldControl>
            <FieldControl>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  disabled={isLoading}
                  {...register('password')}
                  required
                />
                <Label htmlFor="password">Password</Label>
              </div>
              <FieldMess name="password" />
            </FieldControl>
            <Button type="submit" disabled={isLoading} isLoading={isLoading}>
              Login
            </Button>
          </div>
        </form>
      </FormProvider>
      <AuthFormFooter>
        <p>
          First time using Airbnb?&nbsp;
          <span
            onClick={() => setModalView('REGISTER')}
            className="
              text-neutral-800
              cursor-pointer
              hover:underline
            "
          >
            Create an account
          </span>
        </p>
      </AuthFormFooter>
    </>
  );
};

export default LoginForm;
