'use client';

interface ModalHeadingProps {
  title: string;
  subtitle?: string;
}

const ModalHeading = ({ title, subtitle }: ModalHeadingProps) => {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </div>
  );
};

export default ModalHeading;
