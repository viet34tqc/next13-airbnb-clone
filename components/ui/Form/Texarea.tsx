import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';

const TextArea = forwardRef<
  HTMLTextAreaElement,
  ComponentPropsWithoutRef<'textarea'>
>(({ className = '', id, ...props }, ref) => {
  const {
    formState: { errors },
  } = useFormContext();
  const error = id ? errors?.[id]?.message : '';
  return (
    <textarea
      className={cn(
        'peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-neutral-300 focus:border-black',
        {
          'border-rose-500 focus:border-rose-500': error,
        },
        className
      )}
      ref={ref}
      placeholder=" " /* Need this placeholder to perform animation with label */
      {...props}
    />
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
