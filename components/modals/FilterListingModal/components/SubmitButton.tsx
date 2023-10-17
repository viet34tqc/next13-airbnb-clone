'use client';

import Button from '@/components/ui/Button';
import { useModalStoreActions } from '@/store/useModalStore';
import { formatISO } from 'date-fns';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';
import { useState } from 'react';
import { FieldValues, useFormContext } from 'react-hook-form';

type Props = {
  buttonLabel?: string;
};

const SubmitButton = ({ buttonLabel = 'Submit' }: Props) => {
  const router = useRouter();
  const params = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const { setModalView } = useModalStoreActions();

  const { handleSubmit, reset } = useFormContext();

  const onSubmit = async (data: FieldValues) => {
    const { location, dateRange, guestCount, roomCount, bathroomCount } = data;
    const currentQuery = qs.parse(params.toString());
    const updatedQuery: any = {
      ...currentQuery,
      locationValue: location?.value,
      guestCount,
      roomCount,
      bathroomCount,
    };

    if (dateRange.startDate) {
      updatedQuery.startDate = formatISO(dateRange.startDate);
    }

    if (dateRange.endDate) {
      updatedQuery.endDate = formatISO(dateRange.endDate);
    }

    const url = qs.stringifyUrl(
      {
        url: '/',
        query: updatedQuery,
      },
      { skipNull: true }
    );

    reset();
    router.push(url);
    setModalView(null);
  };
  return (
    <Button type="button" disabled={isLoading} onClick={handleSubmit(onSubmit)}>
      {buttonLabel}
    </Button>
  );
};

export default SubmitButton;
