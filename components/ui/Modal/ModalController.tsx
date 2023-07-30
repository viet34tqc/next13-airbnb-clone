'use client';

import {
  useModalIsOpen,
  useModalStoreActions,
  useModalView,
} from '@/store/useModalStore';
import dynamic from 'next/dynamic';
import { CustomDialog } from './Modal';

const LoginModal = dynamic(() => import('../../auth/modals/LoginModal'));
const RegisterModal = dynamic(() => import('../../auth/modals/RegisterModal'));

const ModalController = () => {
  const modalView = useModalView();
  const isOpen = useModalIsOpen();
  const { toggleModal } = useModalStoreActions();
  if (!isOpen) return null;
  return (
    <CustomDialog open={isOpen} onOpenChange={toggleModal}>
      {modalView === 'REGISTER' && <RegisterModal />}
      {modalView === 'LOGIN' && <LoginModal />}
    </CustomDialog>
  );
};

export default ModalController;
