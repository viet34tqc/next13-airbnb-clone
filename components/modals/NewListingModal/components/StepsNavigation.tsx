import Button from '@/components/ui/Button';
import { useModalStoreActions } from '@/store/useModalStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, useFormContext } from 'react-hook-form';
import toast from 'react-hot-toast';
import { STEPS, validationFieldsEachStep } from '../constants';
import { useStepsContext } from '../context/StepsContext';

const StepsNavigation = () => {
  const router = useRouter();

  const { step, handlePreviousStep, handleNextStep } = useStepsContext();
  const stepName = STEPS[step];
  const validationFields = validationFieldsEachStep[stepName];

  const actionLabel = step === STEPS.length - 1 ? 'Create' : 'Next';
  const secondaryActionLabel = step === 0 ? null : 'Back';
  const { handleSubmit, trigger, reset } = useFormContext();

  const [isLoading, setIsLoading] = useState(false);

  const { setModalView } = useModalStoreActions();

  const handleClickNext = async () => {
    const isValid = await trigger(validationFields);
    if (isValid) {
      handleNextStep();
    }
  };

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);

    try {
      const res = await fetch('/api/listings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const resData = await res.json();
      if (!res.ok) {
        throw Error(resData.message || 'Failed to create listing');
      }
      toast.success('Created listing successfully!');
      reset();
      router.replace('/');
      setModalView(null);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setIsLoading(false);
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
        <Button
          type="button"
          disabled={isLoading}
          onClick={handleSubmit(onSubmit)}
        >
          {actionLabel}
        </Button>
      ) : (
        <Button type="button" onClick={handleClickNext}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default StepsNavigation;
