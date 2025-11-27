'use client';

import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Modal({ open, onClose, title, children, className }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className={cn('w-full max-w-lg rounded-xl bg-white shadow-xl', className)}>
        <div className="flex items-center justify-between border-b border-sand-200 px-4 py-3">
          <h3 className="font-serif text-lg">{title}</h3>
          <button aria-label="Close" onClick={onClose} className="p-1 rounded-md hover:bg-sand-100">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}


