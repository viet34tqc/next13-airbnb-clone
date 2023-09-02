'use client';

import { useModalStoreActions, useModalView } from '@/store/useModalStore';
import dynamic from 'next/dynamic';
import { CustomDialog } from './Modal';

const LoginModal = dynamic(() => import('../../auth/modals/LoginModal'));
const RegisterModal = dynamic(() => import('../../auth/modals/RegisterModal'));
const RentModal = dynamic(() => import('@/components/modals/RentModal'));

const ModalController = () => {
  const modalView = useModalView();
  const isOpen = !!modalView;
  const { setModalView } = useModalStoreActions();
  if (!isOpen) return null;
  return (
    <CustomDialog open={isOpen} onOpenChange={() => setModalView(null)}>
      {modalView === 'REGISTER' && <RegisterModal />}
      {modalView === 'LOGIN' && <LoginModal />}
      {modalView === 'RENT' && <RentModal />}
    </CustomDialog>
  );
};

export default ModalController;
