import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children: React.ReactNode;
}

export default function LoadingButton({ isLoading, children, className = '', ...props }: LoadingButtonProps) {
  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
      className={`relative inline-flex items-center justify-center ${className} ${isLoading ? 'cursor-not-allowed opacity-70' : ''}`}
    >
      {isLoading && (
        <Loader2 className="absolute left-4 w-5 h-5 animate-spin" />
      )}
      {children}
    </button>
  );
}