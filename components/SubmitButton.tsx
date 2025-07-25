'use client';

import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button
      type="submit"
      className="self-start rounded bg-brand px-4 py-2 text-white disabled:opacity-50 hover:opacity-90 transition-opacity duration-200 font-medium"
      disabled={pending}
    >
      {pending ? (
        <span className="flex items-center space-x-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>发送中...</span>
        </span>
      ) : (
        '📤 发送留言'
      )}
    </button>
  );
} 