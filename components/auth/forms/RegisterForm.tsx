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

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import toast from 'react-hot-toast';
import { registerSchema } from '../authSchema';
import AuthFormFooter from './AuthFormFooter';

type TRegisterInputs = z.infer<typeof registerSchema>;

const RegisterForm = () => {
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

  const onSubmit: SubmitHandler<FieldValues> = data => {
    setIsLoading(true);

    fetch('/api/register', { method: 'POST', body: JSON.stringify(data) })
      .then(() => {
        toast.success('Registered!');
      })
      .catch(error => {
        toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <FormProvider {...methods}>
        <div className="flex flex-col gap-4">
          <ModalHeading
            title="Welcome to Airbnb"
            subtitle="Create an account!"
          />
          <FieldControl>
            <Input
              id="name"
              disabled={isLoading}
              {...register('name')}
              required
            />
            <Label htmlFor="name">Name</Label>
            <FieldMess name="name" />
          </FieldControl>
          <FieldControl>
            <Input
              id="email"
              disabled={isLoading}
              {...register('email')}
              required
            />
            <Label htmlFor="email">Email Address</Label>
            <FieldMess name="email" />
          </FieldControl>
          <FieldControl>
            <Input
              id="password"
              disabled={isLoading}
              {...register('password')}
              required
            />
            <Label htmlFor="password">Password</Label>
            <FieldMess name="password" />
          </FieldControl>
          <Button disabled={isLoading} onClick={handleSubmit(onSubmit)}>
            Register
          </Button>
        </div>
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
