import Button from '@/components/ui/Button';
import { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { useStepsContext } from '../context/StepsContext';

type Props = {
  submitButton: ReactNode;
  stepsValidation: Record<string, string | Array<string>>;
  hasValidation?: boolean;
};

const StepsNavigation = ({
  submitButton,
  stepsValidation,
  hasValidation = true,
}: Props) => {
  const { step, handlePreviousStep, handleNextStep } = useStepsContext();
  const steps = Object.keys(stepsValidation);
  const stepName = steps[step];
  const stepValidation = stepsValidation[stepName];

  const actionLabel = step === steps.length - 1 ? 'Create' : 'Next';
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

      {step === steps.length - 1 ? (
        submitButton
      ) : (
        <Button
          type="button"
          onClick={hasValidation ? handleClickNext : handleNextStep}
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default StepsNavigation;
