import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef } from 'react';

const FieldControl = ({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) => {
  return <div className={cn('w-full relative', className)} {...props} />;
};

export default FieldControl;
