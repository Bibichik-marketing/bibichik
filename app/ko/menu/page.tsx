import {MenuContent} from '@/app/menu/page';
import {copy,pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('ko',copy.ko.menu.title,'/menu');
export default function Page(){return <MenuContent locale="ko"/>}
