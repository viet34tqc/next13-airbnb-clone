'use client';

import NewListingModal from '@/components/modals/NewListingModal';
import { useModalStoreActions, useModalView } from '@/store/useModalStore';
import dynamic from 'next/dynamic';
import { CustomDialog } from './Modal';

const LoginModal = dynamic(() => import('../../auth/modals/LoginModal'));
const RegisterModal = dynamic(() => import('../../auth/modals/RegisterModal'));
const FilterListingModal = dynamic(
  () => import('@/components/modals/FilterListingModal')
);

const ModalController = () => {
  const modalView = useModalView();
  const isOpen = !!modalView;
  const { setModalView } = useModalStoreActions();
  if (!isOpen) return null;
  return (
    <CustomDialog open={isOpen} onOpenChange={() => setModalView(null)}>
      {modalView === 'REGISTER' && <RegisterModal />}
      {modalView === 'LOGIN' && <LoginModal />}
      {modalView === 'NEW_LISTING' && <NewListingModal />}
      {modalView === 'FILTER_LISTING' && <FilterListingModal />}
    </CustomDialog>
  );
};

export default ModalController;
