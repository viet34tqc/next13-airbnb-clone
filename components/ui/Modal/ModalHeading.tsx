'use client';

interface HeadingProps {
  title: string;
  subtitle?: string;
}

const Heading = ({ title, subtitle }: HeadingProps) => {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </div>
  );
};

export default Heading;
