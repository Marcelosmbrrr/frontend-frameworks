// https://nextjs.org/docs/pages/building-your-application/routing/middleware
import { NextResponse } from 'next/server';

export function middleware(request) {
    return NextResponse.next()
}
