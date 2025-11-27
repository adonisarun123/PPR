'use client';

import { cn } from '@/lib/utils';

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'success' | 'warning';
};

export default function Badge({
  children,
  className,
  variant = 'default',
}: BadgeProps) {
  const variants = {
    default: 'bg-sand-100 text-sand-800',
    success: 'bg-sage-100 text-sage-800',
    warning: 'bg-terracotta-100 text-terracotta-800',
  } as const;

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-1 rounded-md text-xs font-medium',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}


