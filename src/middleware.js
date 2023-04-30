import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
export default withAuth(
  (request) => {
    if (request.nextUrl.pathname.startsWith('/api')) return;

    // Redirect to the home page if the user is authenticated and trying to access the signin page
    if (/^\/(signin|signup)/.test(request.nextUrl.pathname) && request.nextauth.token) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    // Redirect to the home page if the user is authenticated and trying to access the signin page
    if (
      /^\/(my-dogs|my-account|matching|admin)/.test(request.nextUrl.pathname) &&
      !request.nextauth.token
    ) {
      return NextResponse.redirect(new URL('/signin', request.url));
    }

    if (request.nextUrl.pathname === '/admin' && request.nextauth.token?.role === 'admin') {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }

    if (/^\/(admin)/.test(request.nextUrl.pathname) && request.nextauth.token?.role !== 'admin') {
      return NextResponse.redirect(new URL('/', request.url));
    }

    if (!/^\/(admin)/.test(request.nextUrl.pathname) && request.nextauth.token?.role === 'admin') {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
  },
  {
    callbacks: {
      authorized: () => true
    }
  }
);
