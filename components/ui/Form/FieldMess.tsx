import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef } from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  name?: string;
  message?: string;
} & ComponentPropsWithoutRef<'p'>;

const FieldMess = ({ name, message, className, ...props }: Props) => {
  const {
    formState: { errors },
  } = useFormContext();
  if (!name) return null;
  const body = name
    ? errors[name]?.message // Need to force the error message to be string.
    : message
    ? message
    : '';
  if (!body) return null;
  return (
    <p
      className={cn('text-sm font-medium text-destructive', className)}
      {...props}
    >
      {String(body)}
    </p>
  );
};

export default FieldMess;
