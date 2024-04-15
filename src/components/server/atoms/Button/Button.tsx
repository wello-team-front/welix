import React from 'react';

import { Slot } from '@radix-ui/react-slot';
import {
  Button as RadixButton,
  type ButtonProps as RadixButtonProps,
} from '@radix-ui/themes';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/class';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-sm font-medium transition duration-150 ease-in-out focus:outline-none focus:ring-2',
  {
    variants: {
      theme: {
        'primary-fill':
          'bg-deepblue-500 text-left text-lg font-bold leading-6 text-white hover:bg-deepblue-700 focus:ring-deepblue-500/50',
        'primary-line':
          'border border-deepblue-500 bg-transparent text-left text-lg font-bold leading-6 text-deepblue-500 hover:bg-deepblue-50 focus:ring-deepblue-500/50',
        'primary-text':
          'bg-transparent text-left text-lg font-bold leading-6 text-deepblue-500 hover:bg-deepblue-50',
        'sub-fill':
          'bg-grayscale-300 text-left text-lg font-bold leading-6 text-grayscale-800 hover:bg-grayscale-300 focus:ring-grayscale-300/50',
        'sub-line':
          'border border-grayscale-300 bg-transparent text-left text-lg font-bold leading-6 text-grayscale-900 hover:bg-grayscale-300 focus:ring-grayscale-300/50',
        'sub-text':
          'bg-transparent text-left text-lg font-bold leading-6 text-grayscale-800 hover:bg-grayscale-200',
      },
      height: {
        H56: 'h-14 px-6 py-4',
        H48: 'h-12 px-6 py-3',
        H40: 'h-10 px-4 py-3',
        H32: 'h-8 px-4 py-2',
        H26: 'h-6 px-2.5 py-1',
      },
      roundness: {
        rectangle: 'rounded-lg',
        capsule: 'rounded-full',
      },
    },
    defaultVariants: {
      theme: 'primary-fill',
      height: 'H56',
      roundness: 'rectangle',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  color?: RadixButtonProps['color'];
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      theme,
      height,
      roundness,
      asChild = false,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : RadixButton;
    return (
      <Comp
        type={type}
        className={cn(buttonVariants({ theme, height, roundness, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
