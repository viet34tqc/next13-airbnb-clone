'use client';

import { DateRange, Range, RangeKeyDict } from 'react-date-range';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface CalendarProps {
  ranges: Range[];
  onChange: (range: RangeKeyDict) => void;
  disabledDates?: Date[];
}

const Calendar = ({ ranges, onChange, disabledDates }: CalendarProps) => {
  return (
    <DateRange
      rangeColors={['#262626']}
      ranges={ranges}
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
    />
  );
};

export default Calendar;
