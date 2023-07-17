import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';

const Input = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<'input'>>(
  ({ type = 'text', className = '', id, ...props }, ref) => {
    const {
      formState: { errors },
    } = useFormContext();
    const error = id ? String(errors?.[id]?.message) : '';
    return (
      <input
        className={cn(
          'peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-neutral-300 focus:border-black',
          {
            'border-rose-500 focus:border-rose-500': error,
          },
          className
        )}
        ref={ref}
        type={type}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
