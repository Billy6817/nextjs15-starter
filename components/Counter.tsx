'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        🔢 互动计数器演示
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        这是一个 <span className="font-mono bg-blue-100 dark:bg-blue-900 px-1 rounded">Client 组件</span> 示例，展示状态管理和用户交互功能。
      </p>
      
      {/* 计数显示 */}
      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
          {count}
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          当前计数值
        </p>
      </div>

      {/* 操作按钮 */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={decrement}
          className="btn-secondary min-w-[80px]"
          aria-label="减少计数"
        >
          ➖ 减少
        </button>
        
        <button
          onClick={reset}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium min-w-[80px]"
          aria-label="重置计数"
        >
          🔄 重置
        </button>
        
        <button
          onClick={increment}
          className="btn-primary min-w-[80px]"
          aria-label="增加计数"
        >
          ➕ 增加
        </button>
      </div>

      {/* 说明文字 */}
      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md">
        <p className="text-xs text-blue-700 dark:text-blue-300">
          💡 <strong>为什么这是 Client 组件？</strong><br/>
          • 需要 <code>useState</code> 管理状态<br/>
          • 需要 <code>onClick</code> 处理用户交互<br/>
          • 界面会根据用户操作实时更新
        </p>
      </div>
    </div>
  );
} 