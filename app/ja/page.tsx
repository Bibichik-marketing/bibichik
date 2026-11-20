import {HomeContent} from '@/components/home-content';
import {copy,pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('ja',copy.ja.home.title,'/');
export default function Page(){return <HomeContent locale="ja"/>}
