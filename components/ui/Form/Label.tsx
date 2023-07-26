import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef } from 'react';
import { useFormContext } from 'react-hook-form';

const Label = ({
  children,
  className = '',
  htmlFor,
  ...props
}: ComponentPropsWithoutRef<'label'>) => {
  const {
    formState: { errors },
  } = useFormContext();
  const error = htmlFor ? String(errors?.[htmlFor]?.message) : '';
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'absolute text-md duration-150 transform top-[50%] scale-75 -translate-y-7 left-4 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[-50%] peer-focus:scale-75 peer-focus:-translate-y-7 text-rose-500',
        {
          'text-rose-500': error,
        },
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
