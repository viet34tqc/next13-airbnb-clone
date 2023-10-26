import { defaultCountryOption } from '@/components/shared/CountrySelect';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  CustomDialogClose,
  CustomDialogContent,
  CustomDialogOverlay,
  CustomDialogPortal,
} from '../../ui/Modal/Modal';
import StepsNavigation from '../components/StepsNavigation';
import StepsContextProvider from '../context/StepsContext';
import SubmitButton from '../NewListingModal/components/SubmitButton';
import { stepsValidation } from '../NewListingModal/constants';
import Steps from '../NewListingModal/steps/Steps';
import { newListingModalSchema } from '../NewListingModal/validationSchema';
import { useCurrentEditedListing } from '@/store/useListingStore';

export type ListingFormValues = z.infer<typeof newListingModalSchema>;

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

const EditListingModal = () => {
  const editedListing = useCurrentEditedListing();
  const methods = useForm<ListingFormValues>({
    defaultValues: editedListing ?? defaultValues,
    resolver: zodResolver(newListingModalSchema),
  });

  return (
    <CustomDialogPortal>
      <div className="fixed inset-0 z-50 flex justify-center items-center">
        <CustomDialogOverlay />
        <CustomDialogContent>
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

export default EditListingModal;
