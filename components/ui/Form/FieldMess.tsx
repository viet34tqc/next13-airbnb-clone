import { cn } from '@/lib/utils';
import { getProperty } from 'dot-prop';
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
  const body = name ? getProperty(errors, name)?.message : message ?? '';
  if (!body) return null;
  return (
    <p className={cn('text-sm font-medium text-red-600', className)} {...props}>
      {String(body)}
    </p>
  );
};

export default FieldMess;
