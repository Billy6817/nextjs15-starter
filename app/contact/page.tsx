import sendMessage from '@/actions/sendMessage';
import SubmitButton from '@/components/SubmitButton';

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-3xl font-bold gradient-text">📮 给我留言</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        有什么想说的话，请告诉我！✨
      </p>

      {/* 表单直接调用 Server Action */}
      <form action={sendMessage} className="mt-6 flex flex-col gap-4">
        <label className="flex flex-col">
          <span className="mb-1 font-medium text-gray-700 dark:text-gray-300">
            🏷️ 你的名字：
          </span>
          <input
            name="name"
            required
            placeholder="例如：小明"
            className="rounded-lg border border-gray-300 dark:border-gray-600 p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-1 font-medium text-gray-700 dark:text-gray-300">
            💬 留言内容：
          </span>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="想对我说的话..."
            className="rounded-lg border border-gray-300 dark:border-gray-600 p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 resize-none"
          />
        </label>

        {/* 使用独立的 Client 组件 */}
        <SubmitButton />
      </form>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <p className="text-sm text-blue-700 dark:text-blue-300">
          💡 <strong>提示：</strong><br/>
          • 提交后请到终端查看打印日志<br/>
          • 表单使用 Next.js 15 的 Server Actions 技术<br/>
          • 按钮会显示实时的提交状态
        </p>
      </div>
    </main>
  );
}