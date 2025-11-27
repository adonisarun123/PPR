'use client';

import { cn } from '@/lib/utils';
import type { InputHTMLAttributes, ReactNode } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: ReactNode;
};

export default function Input({
  className,
  label,
  error,
  helperText,
  icon,
  id,
  ...props
}: InputProps) {
  const inputId = id || crypto.randomUUID();
  return (
    <div className="space-y-1">
      {label ? (
        <label htmlFor={inputId} className="text-sm text-sand-700">
          {label}
        </label>
      ) : null}
      <div className="relative">
        {icon ? <div className="absolute left-3 top-1/2 -translate-y-1/2 text-sand-600">{icon}</div> : null}
        <input
          id={inputId}
          className={cn(
            'w-full rounded-md border px-3 py-2 outline-none transition',
            icon && 'pl-10',
            error
              ? 'border-red-400 focus:ring-2 focus:ring-red-300'
              : 'border-sand-300 focus:ring-2 focus:ring-terracotta-200',
            className,
          )}
          {...props}
        />
      </div>
      {helperText ? <p className="text-xs text-sand-600">{helperText}</p> : null}
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </div>
  );
}


