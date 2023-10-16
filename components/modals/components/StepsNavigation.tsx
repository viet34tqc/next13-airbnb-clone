import Button from '@/components/ui/Button';
import { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { STEPS } from '../NewListingModal/constants';
import { useStepsContext } from '../context/StepsContext';

type Props = {
  submitButton: ReactNode;
  stepsValidation: Record<string, string | Array<string>>;
};

const StepsNavigation = ({ submitButton, stepsValidation }: Props) => {
  const { step, handlePreviousStep, handleNextStep } = useStepsContext();
  const stepName = STEPS[step];
  const stepValidation = stepsValidation[stepName];

  const actionLabel = step === STEPS.length - 1 ? 'Create' : 'Next';
  const secondaryActionLabel = step === 0 ? null : 'Back';
  const { trigger } = useFormContext();

  const handleClickNext = async () => {
    const isValid = await trigger(stepValidation);
    if (isValid) {
      handleNextStep();
    }
  };

  return (
    <div className="flex justify-center gap-2">
      {secondaryActionLabel && (
        <Button type="button" isOutline onClick={handlePreviousStep}>
          {secondaryActionLabel}
        </Button>
      )}

      {step === STEPS.length - 1 ? (
        submitButton
      ) : (
        <Button type="button" onClick={handleClickNext}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default StepsNavigation;
