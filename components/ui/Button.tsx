'use client';

import clsx from 'clsx';
import { ComponentProps } from 'react';

type BaseProps = {
  isOutline?: boolean;
  isSmall?: boolean;
};

type ButtonProps = BaseProps &
  ComponentProps<'button'> &
  ComponentProps<'a'>;

const Button = ({ isOutline, isSmall, ...props }: ButtonProps) => {
  const newProps = { ...props };

  // Here you can add style from tailwind, below is the demo
  const className = clsx(
    'relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full bg-rose-500 border-rose-500 text-white text-md py-3 font-semibold border-2',
    {
      isOutline: 'bg-white border-black text-black',
      small: 'text-sm py-1 font-light border',
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
