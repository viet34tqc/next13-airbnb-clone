import { cn } from '@/lib/utils';

type Props = {
  label: string;
  onClick?: () => void;
  className?: string;
};

const MenuItem = ({ label, onClick, className }: Props) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        `
        px-4
        py-3
        hover:bg-neutral-100
        transition
        font-semibold`,
        className
      )}
    >
      {label}
    </div>
  );
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;
