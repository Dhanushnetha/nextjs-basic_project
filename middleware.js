import { NextResponse } from "next/server"

export function middleware(req){
    return NextResponse.redirect(new URL('/', req.url))
}

// export const config = {
//     matcher: '/about'
// }

export const config = {
    matcher:[ '/about/:path*']
    // matcher:[ '/about/:path*', '/tasks/:path*']
}