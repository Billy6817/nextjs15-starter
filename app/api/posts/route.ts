import { getPosts } from '@/lib/posts';
import { NextResponse } from 'next/server';

// 仅允许 GET
export async function GET() {
  const posts = await getPosts();
  return NextResponse.json(posts);
}