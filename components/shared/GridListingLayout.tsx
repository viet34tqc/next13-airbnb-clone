import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

const GridListingLayout = ({
  children,
  className = '',
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className="container">
      <div
        className={cn(
          `
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            xl:grid-cols-5
              gap-8
          `,
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default GridListingLayout;
