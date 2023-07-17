import { HTMLAttributes, forwardRef } from 'react';

type Props = {
  label: string;
};

const MenuItem = forwardRef<HTMLDivElement, Props>(
  ({ label }: Props, ref) => {
    return (
      <div
        ref={ref}
        className="
        px-4
        py-3
        hover:bg-neutral-100
        transition
        font-semibold
      "
      >
        {label}
      </div>
    );
  }
);

MenuItem.displayName = 'MenuItem';

export default MenuItem;
