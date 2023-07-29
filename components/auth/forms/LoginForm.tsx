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
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import toast from 'react-hot-toast';
import type { z } from 'zod';
import { loginSchema } from '../authSchema';
import AuthFormFooter from './AuthFormFooter';

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

  const onSubmit: SubmitHandler<FieldValues> = data => {
    setIsLoading(true);

    signIn('credentials', {
      ...data,
      redirect: false,
    }).then(callback => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success('Logged in');
        router.refresh();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };
  return (
    <>
      <FormProvider {...methods}>
        <div className="flex flex-col gap-4">
          <ModalHeading
            title="Welcome back"
            subtitle="Login to your account!"
          />
          <FieldControl>
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
            <div className='relative'>
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
          <Button disabled={isLoading} onClick={handleSubmit(onSubmit)}>
            Login
          </Button>
        </div>
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
