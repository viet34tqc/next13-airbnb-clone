import { defaultCountryOption } from '@/components/shared/CountrySelect';
import {
  CustomDialogClose,
  CustomDialogContent,
  CustomDialogOverlay,
  CustomDialogPortal,
} from '@/components/ui/Modal/Modal';
import useCountries from '@/hooks/useCountries';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
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
  const params = useSearchParams();
  const { getByValue } = useCountries();

  // Value from params
  const updatedDefaultValue = useMemo(() => {
    const locationValue = params?.get('locationValue');
    const startDate = params?.get('startDate');
    const endDate = params?.get('endDate');
    const guestCount = params?.get('guestCount');
    const roomCount = params?.get('roomCount');
    const bathroomCount = params?.get('bathroomCount');

    return {
      location: locationValue
        ? getByValue(locationValue)
        : defaultValues.location,
      dateRange: {
        startDate: startDate ?? defaultValues.dateRange.startDate,
        endDate: endDate ?? defaultValues.dateRange.endDate,
        key: 'selection',
      },
      guestCount: guestCount ? +guestCount : defaultValues.guestCount,
      roomCount: roomCount ? +roomCount : defaultValues.roomCount,
      bathroomCount: bathroomCount
        ? +bathroomCount
        : defaultValues.bathroomCount,
    };
  }, [getByValue, params]);

  // User's filter can be empty
  // So I'm not gonna apply validation here
  const methods = useForm<NewListingModalValues>({
    defaultValues: updatedDefaultValue,
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
