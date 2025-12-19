'use client';

import { cn } from '@/lib/utils';
import type { TextareaHTMLAttributes } from 'react';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
  helperText?: string;
};

export default function Textarea({
  className,
  label,
  error,
  helperText,
  id,
  ...props
}: TextareaProps) {
  const inputId = id || crypto.randomUUID();
  return (
    <div className="space-y-1">
      {label ? (
        <label htmlFor={inputId} className="text-sm text-sand-700">
          {label}
        </label>
      ) : null}
      <textarea
        id={inputId}
        className={cn(
          'w-full rounded-md border bg-wood-50/50 px-3 py-2 outline-none transition min-h-[120px] text-wood-900 placeholder:text-wood-400',
          error
            ? 'border-red-400 focus:ring-2 focus:ring-red-300'
            : 'border-wood-300 focus:border-terracotta-500 focus:ring-1 focus:ring-terracotta-500',
          className,
        )}
        {...props}
      />
      {helperText ? <p className="text-xs text-sand-600">{helperText}</p> : null}
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </div>
  );
}


