import Link from 'next/link';
import { getPosts } from '@/lib/posts';

// export const dynamic = 'auto'; // 让 Next 根据内容自动选择预渲染策略（可选）
// export const dynamic = 'force-static'; // 先试静态
export const dynamic = 'force-dynamic'; // 动态

export default async function PostsPage() {
  const posts = await getPosts();

  const now = new Date().toISOString();

  return (
    <main className="mx-auto max-w-xl p-8">
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        构建/请求时间戳：{now}
      </p>
      <h1 className="text-3xl font-bold mb-6">文章列表</h1>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-4">
            <h2 className="text-2xl font-semibold">
              <Link
                href={`/posts/${post.slug}`}
                className="text-brand hover:underline"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              发布于 {post.date}
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-300 line-clamp-2">
              {post.content.slice(0, 36)}…
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
