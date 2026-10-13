import type {MetadataRoute} from 'next';
import {languageAlternates,locales,pathFor} from '@/lib/i18n';
import {absoluteUrl} from '@/lib/site-url';
export const dynamic='force-dynamic';

const pages=['/','/our-story','/our-flavours','/menu','/menu/lunch','/menu/dinner','/visit-us','/privacy','/terms'];

export default function sitemap():MetadataRoute.Sitemap{
  return pages.flatMap(path=>locales.map(locale=>({
    url:absoluteUrl(pathFor(locale,path)),
    alternates:{languages:languageAlternates(path)},
    changeFrequency:path==='/'?'weekly' as const:'monthly' as const,
    priority:path==='/'?1:0.7
  })));
}
