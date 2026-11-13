import type {MetadataRoute} from 'next';
import {languageAlternates,locales,pathFor} from '@/lib/i18n';
import {absoluteUrl} from '@/lib/site-url';
export const dynamic='force-dynamic';

const pages=['/','/what-is-nyonya','/our-story','/our-flavours','/menu','/menu/lunch','/menu/dinner','/menu/ss2','/menu/163','/visit-us','/privacy','/terms'];

export default function sitemap():MetadataRoute.Sitemap{
  return pages.flatMap(path=>locales.filter(locale=>path==='/menu/163'?(locale==='ja'||locale==='ko'):(path==='/menu/lunch'||path==='/menu/dinner')?(locale!=='ja'&&locale!=='ko'):true).map(locale=>({
    url:absoluteUrl(pathFor(locale,path)),
    alternates:{languages:languageAlternates(path)},
    changeFrequency:path==='/'?'weekly' as const:'monthly' as const,
    priority:path==='/'?1:0.7
  })));
}
