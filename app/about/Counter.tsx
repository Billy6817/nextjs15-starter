'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => setCount(count + 1)}
      className="mt-6 rounded px-3 py-1 bg-btn text-white hover:opacity-90 dark:bg-btn-dark"
    >
      你点了 {count} 次
    </button>
  );
}
