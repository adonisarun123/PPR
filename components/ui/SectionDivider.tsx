'use client';

interface SectionDividerProps {
    variant?: 'top' | 'bottom';
    className?: string;
}

export default function SectionDivider({ variant = 'bottom', className = '' }: SectionDividerProps) {
    if (variant === 'top') return null; // Remove top dividers for cleaner look

    // Simple modern diagonal or straight separator if needed, or just null for whitespace
    return null;
}
