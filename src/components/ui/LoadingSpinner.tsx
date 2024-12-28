import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-current border-r-transparent" 
         role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}