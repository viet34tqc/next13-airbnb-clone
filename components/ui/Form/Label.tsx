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
        'absolute text-md duration-150 transform top-[50%] translate-y-[-50%] left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-zinc-400',
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
