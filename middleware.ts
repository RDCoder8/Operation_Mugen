
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'


const isAdminRoute = createRouteMatcher(['/admin(.*)'])
// Removed duplicate declaration of config



export default clerkMiddleware(async (auth, req) => {
  // Protect all routes starting with `/admin`
  const session = await auth();
  const role = (session.sessionClaims?.metadata as { role?: string })?.role;
  if (isAdminRoute(req) && role !== 'admin') {
    const url = new URL('/', req.url)
    return NextResponse.redirect(url)
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],

}
