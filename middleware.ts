import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = [
  '/reservations',
  '/properties',
  '/trips',
  '/favorites',
];

export default function middleware(req: NextRequest) {
  const sessionCookie = req.cookies.get('next-auth.session-token');

  if (!sessionCookie && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL('/', req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
