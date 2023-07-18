'use client';

import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

type BaseProps = {
  isOutline?: boolean;
  isSmall?: boolean;
};

type ButtonProps = BaseProps & ComponentProps<'button'> & ComponentProps<'a'>;

const Button = ({ isOutline, isSmall, ...props }: ButtonProps) => {
  const newProps = { ...props };

  // Here you can add style from tailwind, below is the demo
  const className = cn(
    'relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full bg-rose-500 border-rose-500 text-white text-md py-3 font-semibold border-2',
    {
      'bg-white border-black text-black': isOutline,
      'text-sm py-1 font-light border': isSmall,
    },
    props.className
  );
  newProps.className = className;

  let As = 'button';

  if (newProps.href) {
    As = 'a';
  }
  if (As === 'button') {
    newProps['type'] = newProps.type ? newProps.type : 'button';
  }

  return <As {...newProps} />;
};

export default Button;
