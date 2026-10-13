import {HomeContent} from '@/app/page';
import {copy,pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('en',copy.en.home.title,'/');
export default function Page(){return <HomeContent locale="en"/>}
