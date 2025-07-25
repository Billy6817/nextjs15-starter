// export type Post = { id: string; title: string; body: string };

// export async function getPosts(): Promise<Post[]> {
//   await new Promise((r) => setTimeout(r, 300));
//   return [
//     { id: '1', title: 'Hello Next.js 15', body: 'Partial Prerendering is cool.' },
//     { id: '2', title: 'Using Server Actions', body: 'Forms without API routes!' },
//   ];
// }

// export async function getPost(id: string): Promise<Post | undefined> {
//   const posts = await getPosts();
//   return posts.find((p) => p.id === id);
// }
export type Post = {
  slug: string;
  title: string;
  date: string;        // YYYY-MM-DD
  content: string;     // 简单文本或 Markdown
};

const posts: Post[] = [
  {
    slug: 'hello-next',
    title: '初识 Next.js 15',
    date: '2025-07-01',
    content: '这是我的第一篇 Next.js 文章，记录我启动项目的过程…',
  },
  {
    slug: 'ppr-intro',
    title: '什么是 Partial Prerendering (PPR)',
    date: '2025-07-15',
    content: 'PPR 让页面既能预渲染又能在请求时流式加载动态部分…',
  },
  {
    slug: 'server-client-components',
    title: 'Server 组件和 Client 组件的区别',
    date: '2025-07-20',
    content: 'Server 组件在服务器生成 HTML，Client 组件处理交互…',
  },
];

// 模拟从数据库读取所有文章
export async function getPosts(): Promise<Post[]> {
  // 这里可以模拟等待，像真正数据库那样：
  // await new Promise(res => setTimeout(res, 200));
  return posts;
}

// 根据 slug 获取单篇文章
export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  return posts.find((p) => p.slug === slug);
}