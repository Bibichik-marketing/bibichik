import type { Metadata } from 'next';
import {headers} from 'next/headers';
import './globals.css';
import {Header,Footer} from '@/components/site';
import {LanguageChrome} from '@/components/language-chrome';
import {siteOrigin} from '@/lib/site-url';
import {restaurantStructuredData} from '@/lib/structured-data';
export const metadata:Metadata={metadataBase:new URL(siteOrigin),title:{default:'BiBiChik — A Taste of Nyonya Heritage',template:'%s | BiBiChik'},description:'Discover the warmth, colour and character of Malaysian Nyonya cuisine. Explore our story, flavours and original lunch and dinner menus.',icons:{icon:'/favicon.png'}};
export default async function Layout({children}:{children:React.ReactNode}){const locale=(await headers()).get('x-bibichik-locale')||'en';const structuredData=JSON.stringify(restaurantStructuredData()).replace(/</g,'\\u003c');return <html lang={locale}><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:structuredData}}/><LanguageChrome/><Header/>{children}<Footer/></body></html>}
