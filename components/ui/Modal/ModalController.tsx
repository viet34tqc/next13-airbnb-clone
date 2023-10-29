'use client';

import { useModalStoreActions, useModalView } from '@/store/useModalStore';
import dynamic from 'next/dynamic';
import { CustomDialog } from './Modal';

const LoginModal = dynamic(() => import('../../auth/modals/LoginModal'));
const RegisterModal = dynamic(() => import('../../auth/modals/RegisterModal'));
const NewListingModal = dynamic(
  () => import('@/components/modals/NewListingModal')
);
const EditListingModal = dynamic(
  () => import('@/components/modals/EditListingModal')
);
const FilterListingModal = dynamic(
  () => import('@/components/modals/FilterListingModal')
);
const IntructionModal = dynamic(
  () => import('@/components/modals/IntructionModal')
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
      {modalView === 'EDIT_LISTING' && <EditListingModal />}
      {modalView === 'FILTER_LISTING' && <FilterListingModal />}
      {modalView === 'INTRUCTION_MODAL' && <IntructionModal />}
    </CustomDialog>
  );
};

export default ModalController;
