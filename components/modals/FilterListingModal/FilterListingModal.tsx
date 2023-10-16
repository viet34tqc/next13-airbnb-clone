import { defaultCountryOption } from '@/components/shared/CountrySelect';
import {
  CustomDialogClose,
  CustomDialogContent,
  CustomDialogOverlay,
  CustomDialogPortal,
} from '@/components/ui/Modal/Modal';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { NewListingModalValues } from '../NewListingModal/NewListingModal';
import StepsNavigation from '../components/StepsNavigation';
import StepsContextProvider from '../context/StepsContext';
import SubmitButton from './components/SubmitButton';
import Steps from './steps/Steps';
import { filterListingSchema } from './validationSchema';

const defaultValues = {
  location: defaultCountryOption,
  date: {
    startDate: new Date(),
    endDate: new Date(),
  },
  guestCount: 1,
  roomCount: 1,
  bathroomCount: 1,
};

const FilterListingModal = () => {
  const methods = useForm<NewListingModalValues>({
    defaultValues,
    resolver: zodResolver(filterListingSchema),
  });

  return (
    <CustomDialogPortal>
      <div className="fixed inset-0 z-50 flex justify-center items-center">
        <CustomDialogOverlay />
        <CustomDialogContent>
          <StepsContextProvider>
            <Steps />
            <StepsNavigation submitButton={<SubmitButton />} />
          </StepsContextProvider>
          <CustomDialogClose />
        </CustomDialogContent>
      </div>
    </CustomDialogPortal>
  );
};

export default FilterListingModal;
