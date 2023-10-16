import Calendar from '@/components/shared/Calendar';
import ModalHeading from '@/components/ui/Modal/ModalHeading';
import { useFormContext, useWatch } from 'react-hook-form';

type Props = {};

const DateStep = () => {
  const { setValue } = useFormContext();
  const dateRange = useWatch({ name: 'dateRange' });
  return (
    <div>
      <ModalHeading
        title="When do you plan to go?"
        subtitle="Make sure everyone is free!"
      />
      <Calendar
        onChange={value => setValue('dateRange', value.selection)}
        value={dateRange}
      />
    </div>
  );
};

export default DateStep;
