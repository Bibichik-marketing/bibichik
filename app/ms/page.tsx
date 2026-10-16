import {HomeContent} from '@/app/page';
import {copy,pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('ms',copy.ms.home.title,'/');
export default function Page(){return <HomeContent locale="ms"/>}
