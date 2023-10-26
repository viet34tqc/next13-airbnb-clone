'use client';

import { defaultCountryOption } from '@/components/shared/CountrySelect';
import {
  useCurrentCreatedListing,
  useListingStoreActions,
} from '@/store/useListingStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import {
  CustomDialogClose,
  CustomDialogContent,
  CustomDialogOverlay,
  CustomDialogPortal,
} from '../../ui/Modal/Modal';
import StepsNavigation from '../components/StepsNavigation';
import StepsContextProvider from '../context/StepsContext';
import SubmitButton from './components/SubmitButton';
import { stepsValidation } from './constants';
import Steps from './steps/Steps';
import { ListingFormValues, newListingModalSchema } from './validationSchema';

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

const NewListingModal = () => {
  const currentCreatedListing = useCurrentCreatedListing();
  const { setCurrentCreatedListing } = useListingStoreActions();

  const methods = useForm<ListingFormValues>({
    defaultValues: currentCreatedListing ?? defaultValues,
    resolver: zodResolver(newListingModalSchema),
  });

  return (
    <CustomDialogPortal>
      <div className="fixed inset-0 z-50 flex justify-center items-center">
        <CustomDialogOverlay />
        <CustomDialogContent
          // Save the data when modal is close
          // So the user won't have to implement all the steps from start
          onCloseAutoFocus={() => {
            const { watch } = methods;
            const values = watch();

            setCurrentCreatedListing(values);
          }}
        >
          <StepsContextProvider>
            <FormProvider {...methods}>
              <Steps />
              <StepsNavigation
                submitButton={<SubmitButton />}
                stepsValidation={stepsValidation}
              />
            </FormProvider>
          </StepsContextProvider>
          <CustomDialogClose />
        </CustomDialogContent>
      </div>
    </CustomDialogPortal>
  );
};

export default NewListingModal;
