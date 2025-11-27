'use client';

import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
};

export default function Button({
  className,
  variant = 'primary',
  size = 'md',
  loading,
  iconLeft,
  iconRight,
  disabled,
  fullWidth,
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

  const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary:
      'bg-terracotta-600 text-white hover:bg-terracotta-700 focus-visible:ring-terracotta-400',
    secondary:
      'bg-sage-600 text-white hover:bg-sage-700 focus-visible:ring-sage-400',
    outline:
      'border border-sand-300 text-sand-800 hover:bg-sand-100 focus-visible:ring-sand-400',
    ghost: 'text-sand-800 hover:bg-sand-100 focus-visible:ring-sand-400',
  };

  const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-6 text-base',
  };

  return (
    <button
      className={cn(
        base,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        (disabled || loading) && 'opacity-75 cursor-not-allowed',
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : iconLeft ? (
        <span className="mr-2">{iconLeft}</span>
      ) : null}
      {children}
      {iconRight ? <span className="ml-2">{iconRight}</span> : null}
    </button>
  );
}


