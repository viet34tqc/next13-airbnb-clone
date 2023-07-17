'use client';

import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import { signIn } from 'next-auth/react';
import { useCallback, useState } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import toast from 'react-hot-toast';
import Button from '../ui/Button';
import FieldControl from '../ui/Form/FieldControl';
import FieldMess from '../ui/Form/FieldMess';
import Input from '../ui/Form/Input';
import Label from '../ui/Form/Label';
import {
  CustomDialogContent,
  CustomDialogOverlay,
  CustomDialogPortal,
} from '../ui/Modal';
import ModalHeading from '../ui/ModalHeading';

type Props = {};

const RegisterModal = (props: Props) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<FieldValues>({
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
        registerModal.onClose();
        loginModal.onOpen();
      })
      .catch(error => {
        toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onToggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [registerModal, loginModal]);

  const bodyContent = (
    <FormProvider {...methods}>
      <div className="flex flex-col gap-4">
        <ModalHeading title="Welcome to Airbnb" subtitle="Create an account!" />
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
          <Label htmlFor="email">Name</Label>
          <FieldMess name="email" />
        </FieldControl>
        <FieldControl>
          <Input
            id="password"
            disabled={isLoading}
            {...register('password')}
            required
          />
          <Label htmlFor="password">Name</Label>
          <FieldMess name="password" />
        </FieldControl>
        <Button disabled={isLoading} onClick={handleSubmit(onSubmit)}>
          Login
        </Button>
      </div>
    </FormProvider>
  );

  const footerContent = (
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
        <p>
          Already have an account?
          <span
            onClick={onToggle}
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
      </div>
    </div>
  );
  return (
    <CustomDialogPortal>
      <div className="fixed inset-0 z-50 flex justify-center items-center">
        <CustomDialogOverlay />
        <CustomDialogContent>
          {bodyContent}
          {footerContent}
        </CustomDialogContent>
      </div>
    </CustomDialogPortal>
  );
};

export default RegisterModal;
