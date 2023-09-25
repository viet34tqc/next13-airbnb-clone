import { defaultCountryOption } from '@/components/shared/CountrySelect';
import { useModalStoreActions, useModalView } from '@/store/useModalStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  CustomDialog,
  CustomDialogClose,
  CustomDialogContent,
  CustomDialogOverlay,
  CustomDialogPortal,
} from '../../ui/Modal/Modal';
import StepsNavigation from './components/StepsNavigation';
import StepsContextProvider from './context/StepsContext';
import Steps from './steps/Steps';
import { rentModalSchema } from './validationSchema';

type RentModalValues = z.infer<typeof rentModalSchema>;

const defaultValues = {
  category: '',
  location: defaultCountryOption,
  guestCount: 1,
  roomCount: 1,
  bathroomCount: 1,
  imageSrc: '',
  price: 1,
  title: '',
  description: '',
};

const RentModal = () => {
  const methods = useForm<RentModalValues>({
    defaultValues,
    resolver: zodResolver(rentModalSchema),
  });

  const modalView = useModalView();
  const isOpen = !!modalView;
  const { setModalView } = useModalStoreActions();

  return (
    <CustomDialog open={isOpen} onOpenChange={() => setModalView(null)}>
      <CustomDialogPortal>
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <CustomDialogOverlay />
          <CustomDialogContent>
            <StepsContextProvider>
              <FormProvider {...methods}>
                <Steps />
                <StepsNavigation />
              </FormProvider>
            </StepsContextProvider>
            <CustomDialogClose />
          </CustomDialogContent>
        </div>
      </CustomDialogPortal>
    </CustomDialog>
  );
};

export default RentModal;
