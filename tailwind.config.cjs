module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1e88e5',   // 自定义主色（蓝）
          light: '#6ab7ff',
          dark:  '#005cb2',
        },
        btn: {
          DEFAULT: '#ff7043',    // 橘色
          dark:    '#f4511e',    // 暗黑模式下更深
        },
      },
    },
  },
  plugins: [],
};
