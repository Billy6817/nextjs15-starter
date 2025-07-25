import { getPosts, getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';


export async function generateStaticParams() {
    const posts = await getPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

// 🔑 Next.js 15: params 现在是 Promise 类型
type PageProps = {
  params: Promise<{ slug: string }>;
};

// ✅ 修复：await params
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;  // 🔑 关键修复：先 await params
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return { 
      title: '文章未找到',
      description: '抱歉，您访问的文章不存在。'
    };
  }
  
  return { 
    title: `${post.title} | 我的博客`,
    description: post.content.slice(0, 100) + '...',
    openGraph: {
      title: post.title,
      description: post.content.slice(0, 100) + '...',
      type: 'article',
      publishedTime: post.date,
    }
  };
}

// ✅ 修复：await params
export default async function PostDetailPage({ params }: PageProps) {
  const { slug } = await params;  // 🔑 关键修复：先 await params
  const post = await getPostBySlug(slug);

  if (!post) {
    // slug 不存在时返回 404 页面
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl p-8">
      <article className="prose dark:prose-invert max-w-none">
        {/* 文章头部 */}
        <header className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
          <h1 className="text-4xl font-bold gradient-text mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <time dateTime={post.date} className="flex items-center">
              📅 发布于：{new Date(post.date).toLocaleDateString('zh-CN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span className="mx-2">•</span>
            <span>📖 阅读时间：约 {Math.ceil(post.content.length / 200)} 分钟</span>
          </div>
        </header>

        {/* 文章内容 */}
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
          <p className="text-lg">{post.content}</p>
        </div>

        {/* 文章底部导航 */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link 
            href="/posts" 
            className="inline-flex items-center text-brand hover:underline transition-colors duration-200 font-medium"
          >
            ← 返回文章列表
          </Link>
        </footer>
      </article>
    </main>
  );
}