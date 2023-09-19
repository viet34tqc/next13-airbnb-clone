import { CountrySelectValue } from '@/components/shared/CountrySelect';
import dynamic from 'next/dynamic';
import { FormProvider, useForm } from 'react-hook-form';
import { STEPS } from '../constant';

type Props = {
  step: number;
};

type RentModalValues = {
  category: string;
  location: CountrySelectValue | null;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  imageSrc: string;
  price: number;
  title: string;
  description: string;
};

const Steps = ({ step }: Props) => {
  const methods = useForm<RentModalValues>({
    defaultValues: {
      category: '',
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: '',
      price: 1,
      title: '',
      description: '',
    },
  });

  const Step = dynamic(() => import(`./${STEPS[step]}Step`));
  return (
    <div className="flex flex-col gap-8">
      <FormProvider {...methods}>
        <Step />
      </FormProvider>
    </div>
  );
};

export default Steps;
