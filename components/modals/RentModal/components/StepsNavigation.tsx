import Button from '@/components/ui/Button';
import { useFormContext } from 'react-hook-form';
import { STEPS, validationFieldsEachStep } from '../constants';
import { useStepsContext } from '../context/StepsContext';

const StepsNavigation = () => {
  const { step, handlePreviousStep, handleNextStep } = useStepsContext();
  const stepName = STEPS[step];
  const validationFields = validationFieldsEachStep[stepName];

  const actionLabel = step === STEPS.length - 1 ? 'Create' : 'Next';
  const secondaryActionLabel = step === 0 ? null : 'Back';
  const { trigger } = useFormContext();

  const handleClickNext = async () => {
    const isValid = await trigger(validationFields);
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
      <Button type="button" onClick={handleClickNext}>
        {actionLabel}
      </Button>
    </div>
  );
};

export default StepsNavigation;
