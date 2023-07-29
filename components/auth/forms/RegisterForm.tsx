import Button from '@/components/ui/Button';
import FieldControl from '@/components/ui/Form/FieldControl';
import FieldMess from '@/components/ui/Form/FieldMess';
import Input from '@/components/ui/Form/Input';
import Label from '@/components/ui/Form/Label';
import ModalHeading from '@/components/ui/Modal/ModalHeading';
import { useModalStoreActions } from '@/store/useModalStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import type { z } from 'zod';

import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { registerSchema } from '../authSchema';
import AuthFormFooter from './AuthFormFooter';

type TRegisterInputs = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const router = useRouter();
  const { setModalView } = useModalStoreActions();

  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<TRegisterInputs>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const { register, handleSubmit } = methods;

  const onSubmit = async (data: TRegisterInputs) => {
    setIsLoading(true);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const userData = await res.json();

      if (!res.ok) {
        setIsLoading(false);
        throw Error(userData.message || 'Failed to register');
      }
      toast.success('Registered!');
      router.replace('/');
    } catch (error) {
      if (error instanceof Error) {
        toast(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <ModalHeading
              title="Welcome to Airbnb"
              subtitle="Create an account!"
            />
            <FieldControl>
              <div className="relative">
                <Input id="name" disabled={isLoading} {...register('name')} />
                <Label htmlFor="name">Name</Label>
              </div>
              <FieldMess name="name" />
            </FieldControl>
            <FieldControl>
              {/* We need this addition div because when the error message is displayed, the height of FieldControl increase => Label ui is broken */}
              <div className="relative">
                <Input
                  id="email"
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
                  disabled={isLoading}
                  {...register('password')}
                  required
                />
                <Label htmlFor="password">Password</Label>
              </div>
              <FieldMess name="password" />
            </FieldControl>
            <Button type="submit" disabled={isLoading}>
              Register
            </Button>
          </div>
        </form>
      </FormProvider>
      <AuthFormFooter>
        <p>
          Already have an account?
          <span
            onClick={() => setModalView('LOGIN')}
            className="
              text-neutral-800
              cursor-pointer
              hover:underline
            "
          >
            {' '}
            Log in
          </span>
        </p>
      </AuthFormFooter>
    </>
  );
};

export default RegisterForm;
