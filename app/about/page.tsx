// import Counter from '@/components/Counter';
import Counter from '@/app/about/Counter'
import Image from 'next/image'
import test from '@/public/images/test.jpg'


export default function AboutPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold gradient-text">关于我们</h1>
      <p className="mt-4 text-brand">
        这是你的第一个自定义页面！🎉
      </p>
      
      <div className="mt-8 space-y-8">
        {/* 路由说明 */}
        <section className="card p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            🛣️ Next.js 15 路由功能
          </h2>
          <div className="space-y-3 text-gray-600 dark:text-gray-300">
            <p>
              这个页面展示了 Next.js 15 的 <strong>文件系统路由</strong> 功能。
            </p>
            <p>
              只需要在 <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded font-mono">app/</code> 目录下创建文件夹和 <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded font-mono">page.tsx</code> 文件，就能自动生成新的路由！
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                📁 <strong>文件结构示例：</strong><br/>
                <code className="font-mono">app/about/page.tsx</code> → <code>/about</code> 路由<br/>
                <code className="font-mono">app/posts/page.tsx</code> → <code>/posts</code> 路由
              </p>
            </div>
          </div>
        </section>

        {/* 组件类型对比 */}
        <section className="grid md:grid-cols-2 gap-6">
          {/* Server 组件说明 */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">
              🖥️ Server 组件示例
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              当前这个页面就是 <span className="font-mono bg-green-100 dark:bg-green-900 px-1 rounded">Server 组件</span>
            </p>
            <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-400">
              <li>✅ 在服务器端预渲染</li>
              <li>✅ 加载速度快</li>
              <li>✅ SEO 友好</li>
              <li>✅ 适合静态内容展示</li>
            </ul>
          </div>

          {/* Client 组件说明 */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
              📱 Client 组件示例
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              下方的计数器是 <span className="font-mono bg-blue-100 dark:bg-blue-900 px-1 rounded">Client 组件</span>
            </p>
            <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-400">
              <li>✅ 支持用户交互</li>
              <li>✅ 状态管理</li>
              <li>✅ 事件处理</li>
              <li>✅ 实时数据更新</li>
            </ul>
          </div>
        </section>

        {/* Counter 组件演示 */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            🎮 交互式组件演示
          </h2>
          <Counter />
        </section>

        <Image src={test} alt="test" width={100} height={100} className='rounded-xl shadow mt-6'/>
        

        {/* 技术栈信息 */}
        <section className="card p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            🛠️ 技术栈
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-2xl mb-1">⚡</div>
              <div className="text-sm font-medium">Next.js 15</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-2xl mb-1">🔷</div>
              <div className="text-sm font-medium">TypeScript</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-2xl mb-1">🎨</div>
              <div className="text-sm font-medium">Tailwind CSS</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-2xl mb-1">🚀</div>
              <div className="text-sm font-medium">Turbopack</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}