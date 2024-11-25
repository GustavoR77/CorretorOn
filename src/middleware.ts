import { NextRequest, NextResponse } from 'next/server'
import { getToken } from '@/libs/auth';

const protectPaths = [
  '/area-de-trabalho',
  '/area-de-trabalho/editar-perfil',
  '/area-de-trabalho/equipe',
  '/area-de-trabalho/espelho-de-vendas',
  '/area-de-trabalho/registros',
  '/area-de-trabalho/simulador',
]

const redirectToLogin = (request: NextRequest) => NextResponse.redirect(
  new URL('/login?intended=' + request.nextUrl.pathname, request.url)
);

export async function middleware(request: NextRequest) {

    const token = await getToken(request)

    if (protectPaths.includes(request.nextUrl.pathname)) {
      if(!token) return redirectToLogin(request);

      const res = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT + '/auth', { 
        method: "GET", 
        headers: <HeadersInit>{ 
          key: process.env.NEXT_PUBLIC_API_KEY,
          project: process.env.NEXT_PUBLIC_API_PROJECT,
          authorization: String(token)
        },
      });
    
      if(res.status == 401) return redirectToLogin(request);
    }

    return NextResponse.next()
}

export const config = {
  matcher: ['/:path*'],
}