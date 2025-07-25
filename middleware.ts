// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const response = NextResponse.next();
//   response.headers.set('x-powered-by', 'Next.js 15');
//   return response;
// }

// export const config = {
//   matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
// };

import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  /* --- ① URL 重定向：/blog → /posts --- */
  if (request.nextUrl.pathname === '/blog') {
    // 308 永久重定向；可改 307 临时重定向
    return NextResponse.redirect(new URL('/posts', request.url), 308);
  }

  const response = NextResponse.next();

  /* ------ 在所有响应上统一添加安全头 ------ */
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; img-src 'self' https: data:; script-src 'self'; style-src 'self' 'unsafe-inline'"
  );
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-Content-Type-Options', 'nosniff');

  return response;
}

/* ------ 限定哪些路径会经过中间件（这里全站生效） ------ */
// export const config = {
//   matcher: '/:path*',
// };
export const config = {
  matcher: '/posts/:path*',
};
