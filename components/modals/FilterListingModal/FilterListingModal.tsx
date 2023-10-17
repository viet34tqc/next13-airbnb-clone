import { defaultCountryOption } from '@/components/shared/CountrySelect';
import {
  CustomDialogClose,
  CustomDialogContent,
  CustomDialogOverlay,
  CustomDialogPortal,
} from '@/components/ui/Modal/Modal';
import { FormProvider, useForm } from 'react-hook-form';
import { NewListingModalValues } from '../NewListingModal/NewListingModal';
import StepsNavigation from '../components/StepsNavigation';
import StepsContextProvider from '../context/StepsContext';
import SubmitButton from './components/SubmitButton';
import { filterStepsValidation } from './constants';
import Steps from './steps/Steps';

const defaultValues = {
  location: defaultCountryOption,
  dateRange: {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  },
  guestCount: 1,
  roomCount: 1,
  bathroomCount: 1,
};

const FilterListingModal = () => {
  // User's filter can be empty
  // So I'm not gonna apply validation here
  const methods = useForm<NewListingModalValues>({
    defaultValues,
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
                submitButton={<SubmitButton buttonLabel="Filter" />}
                hasValidation={false}
                stepsValidation={filterStepsValidation}
              />
            </FormProvider>
          </StepsContextProvider>
          <CustomDialogClose />
        </CustomDialogContent>
      </div>
    </CustomDialogPortal>
  );
};

export default FilterListingModal;
