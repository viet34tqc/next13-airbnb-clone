import Calendar from '@/components/shared/Calendar';
import ModalHeading from '@/components/ui/Modal/ModalHeading';
import { useFormContext, useWatch } from 'react-hook-form';

type Props = {};

const DateStep = () => {
  const { setValue } = useFormContext();
  const dateRange = useWatch({ name: 'dateRange' });
  // We need to convert the date to UTC format because we have formatted the date in ISO format when we we submit the filter.
  const formatedDateRangeInUTC = {
    ...dateRange,
    startDate: new Date(dateRange.startDate),
    endDate: new Date(dateRange.endDate),
  };

  return (
    <div>
      <ModalHeading
        title="When do you plan to go?"
        subtitle="Make sure everyone is free!"
      />
      <Calendar
        onChange={value => setValue('dateRange', value.selection)}
        ranges={[formatedDateRangeInUTC]}
      />
    </div>
  );
};

export default DateStep;
