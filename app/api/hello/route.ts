// import { NextResponse } from 'next/server';

// export async function GET() {
//   return NextResponse.json({ message: 'Hello from Next.js 15!' });
// }
import { NextResponse } from 'next/server';

// (可选) 指定为 Edge Runtime，更快
export const runtime = 'edge';

export async function GET() {
  // 这里可以写任何服务器逻辑，例如数据库查询
  return NextResponse.json({
    message: 'Hello from Next.js API Route!',
    timestamp: new Date().toISOString(),
  });
}