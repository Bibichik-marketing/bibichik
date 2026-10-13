import {NextResponse,type NextRequest} from 'next/server';
import {localeFromPath} from './lib/i18n';

export function proxy(request:NextRequest){
  const path=request.nextUrl.pathname;
  if(/^\/(?:$|our-story\/?$|our-flavours\/?$|menu(?:\/(?:lunch|dinner))?\/?$|visit-us\/?$|privacy\/?$|terms\/?$)/.test(path)){
    const destination=request.nextUrl.clone();
    destination.pathname=`/en${path==='/'?'/':path.endsWith('/')?path:`${path}/`}`;
    return NextResponse.redirect(destination,308);
  }
  const headers=new Headers(request.headers);
  headers.set('x-bibichik-locale',localeFromPath(path));
  return NextResponse.next({request:{headers}});
}

export const config={matcher:['/((?!_next|favicon.ico|assets|menus).*)']};
