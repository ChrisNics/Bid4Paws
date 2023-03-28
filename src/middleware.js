import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
export default withAuth(
  (request) => {
    // Redirect to the home page if the user is authenticated and trying to access the signin page
    if (/^\/(signin|signup)/.test(request.nextUrl.pathname) && request.nextauth.token) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    // Redirect to the home page if the user is authenticated and trying to access the signin page
    if (
      /^\/(my-dogs|my-account|matching)/.test(request.nextUrl.pathname) &&
      !request.nextauth.token
    ) {
      return NextResponse.redirect(new URL('/signin', request.url));
    }

    return;
  },
  {
    callbacks: {
      authorized: () => true
    }
  }
);
