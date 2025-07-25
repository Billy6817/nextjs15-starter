// components/ThemeSwitcher.tsx
'use client';

import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  // 确保组件已挂载，避免服务端渲染不匹配
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(savedTheme || systemTheme);
  }, []);

  // 每当 theme 变化时，切换 <html> 上的 class
  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // 防止服务端渲染不匹配
  if (!mounted) {
    return (
      <button className="rounded-lg border border-gray-300 px-3 py-2 text-sm hover:bg-gray-100 transition-colors">
        <span className="w-4 h-4 block">🌙</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 group"
      aria-label={`切换到${theme === 'light' ? '暗色' : '亮色'}模式`}
    >
      <div className="flex items-center space-x-2">
        <span className="text-lg transition-transform duration-200 group-hover:scale-110">
          {theme === 'light' ? '🌙' : '☀️'}
        </span>
        <span className="hidden sm:inline">
          {theme === 'light' ? '暗色' : '亮色'}
        </span>
      </div>
    </button>
  );
}