'use client';

import {
  CustomDialogContent,
  CustomDialogOverlay,
  CustomDialogPortal,
} from '../../ui/Modal/Modal';
import LoginForm from '../forms/LoginForm';

const LoginModal = () => {
  return (
    <CustomDialogPortal>
      <div className="fixed inset-0 z-50 flex justify-center items-center">
        <CustomDialogOverlay />
        <CustomDialogContent>
          <LoginForm />
        </CustomDialogContent>
      </div>
    </CustomDialogPortal>
  );
};

export default LoginModal;
