import Link from 'next/link';

export default function Home() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Next.js 15 Starter</h1>
      <p>This template demonstrates key features of Next.js 15.4.</p>
      <Link href="/posts" className="text-blue-600 underline">
        View sample posts
      </Link>
    </section>
  );
}

