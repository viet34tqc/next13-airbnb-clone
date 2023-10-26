import { defaultCountryOption } from '@/components/shared/CountrySelect';
import { useCurrentEditedListing } from '@/store/useListingStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import {
  CustomDialogClose,
  CustomDialogContent,
  CustomDialogOverlay,
  CustomDialogPortal,
} from '../../ui/Modal/Modal';
import { stepsValidation } from '../NewListingModal/constants';
import Steps from '../NewListingModal/steps/Steps';
import { listingFormSchema } from '../NewListingModal/validationSchema';
import StepsNavigation from '../components/StepsNavigation';
import StepsContextProvider from '../context/StepsContext';
import { ListingFormValues } from '../types';
import SubmitButton from './components/SubmitButton';

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
    resolver: zodResolver(listingFormSchema),
  });
  
  if (!editedListing) return null;

  return (
    <CustomDialogPortal>
      <div className="fixed inset-0 z-50 flex justify-center items-center">
        <CustomDialogOverlay />
        <CustomDialogContent>
          <StepsContextProvider>
            <FormProvider {...methods}>
              <Steps />
              <StepsNavigation
                submitButton={<SubmitButton listingId={editedListing.id} />}
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
