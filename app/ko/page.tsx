import {HomeContent} from '@/components/home-content';
import {copy,pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('ko',copy.ko.home.title,'/');
export default function Page(){return <HomeContent locale="ko"/>}
