import Button from '@/components/ui/Button';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import {
  CustomDialogClose,
  CustomDialogContent,
  CustomDialogOverlay,
  CustomDialogPortal,
} from '../../ui/Modal/Modal';
import { STEPS } from './constant';
import Steps from './steps/Steps';

const RentModal = () => {
  const [step, setStep] = useState<number>(0);

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const actionLabel = step === STEPS.length ? 'Create' : 'Next';
  const secondaryActionLabel = step === 0 ? null : 'Back';

  return (
    <CustomDialogPortal>
      <div className="fixed inset-0 z-50 flex justify-center items-center">
        <CustomDialogOverlay />
        <CustomDialogContent>
          <Steps step={step} />
          <div className="flex justify-center gap-2">
            <Button onClick={handleNextStep}>{actionLabel}</Button>
            {secondaryActionLabel && (
              <Button isOutline onClick={handlePreviousStep}>
                {secondaryActionLabel}
              </Button>
            )}
          </div>
          <CustomDialogClose />
        </CustomDialogContent>
      </div>
    </CustomDialogPortal>
  );
};

export default RentModal;
