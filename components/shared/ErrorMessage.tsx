'use client';

import { PropsWithChildren } from 'react';
import ModalHeading from '../ui/Modal/ModalHeading';

interface ErrorMessageProps {
  title: string;
  subtitle: string;
}

const ErrorMessage = ({
  title,
  subtitle,
  children,
}: PropsWithChildren<ErrorMessageProps>) => {
  return (
    <div
      className="
        h-[80vh]
        flex
        flex-col
        gap-2
        justify-center
        items-center
        error-message
      "
    >
      <ModalHeading title={title} subtitle={subtitle} />
      {children}
    </div>
  );
};

export default ErrorMessage;
