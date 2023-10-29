import { cn } from '@/lib/utils';
import { XMarkIcon } from '@heroicons/react/24/outline';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import React from 'react';

const CustomDialog = DialogPrimitive.Root;

const CustomDialogTrigger = DialogPrimitive.Trigger;

const CustomDialogPortal = ({
  ...props
}: DialogPrimitive.DialogPortalProps) => <DialogPrimitive.Portal {...props} />;
CustomDialogPortal.displayName = DialogPrimitive.Portal.displayName;

const CustomDialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn('fixed inset-0 z-50 bg-black/40 backdrop-blur-sm', className)}
    {...props}
  />
));
CustomDialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const CustomDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Content
    ref={ref}
    className={cn(
      'bg-white overflow-y-auto max-h-full fixed z-50 grid w-[95%] sm:w-full max-w-[800px] scale-100 gap-4 border p-6 opacity-100 shadow-lg sm:rounded-lg',
      className
    )}
    {...props}
  >
    {children}
  </DialogPrimitive.Content>
));
CustomDialogContent.displayName = DialogPrimitive.Content.displayName;

const CustomDialogClose = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Close
    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
    ref={ref}
    {...props}
  >
    <XMarkIcon className="h-4 w-4" />
    <span className="sr-only">Close</span>
  </DialogPrimitive.Close>
));

CustomDialogClose.displayName = DialogPrimitive.Close.displayName;

const CustomDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-1.5 text-center sm:text-left',
      className
    )}
    {...props}
  />
);
CustomDialogHeader.displayName = 'CustomDialogHeader';

const CustomDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
    {...props}
  />
);
CustomDialogFooter.displayName = 'CustomDialogFooter';

const CustomDialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
CustomDialogTitle.displayName = DialogPrimitive.Title.displayName;

const CustomDialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CustomDialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  CustomDialog,
  CustomDialogClose,
  CustomDialogContent,
  CustomDialogDescription,
  CustomDialogFooter,
  CustomDialogHeader,
  CustomDialogOverlay,
  CustomDialogPortal,
  CustomDialogTitle,
  CustomDialogTrigger,
};
