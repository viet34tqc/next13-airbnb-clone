import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

type Props = ComponentPropsWithoutRef<'select'> & {
  options: Record<'value' | 'label', string>[];
};

const Select = forwardRef<HTMLSelectElement, Props>(
  ({ options, className, ...props }, ref) => {
    return (
      <select
        {...props}
        className={clsx(
          'flex h-10 w-full items-center justify-between rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
      >
        {options.map(option => (
          <option
            value={option.value}
            key={option.value}
            className="text-black"
          >
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = 'Select';

export default Select;
