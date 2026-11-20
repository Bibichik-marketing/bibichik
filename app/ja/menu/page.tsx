import {MenuContent} from '@/components/menu-content';
import {copy,pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('ja',copy.ja.menu.title,'/menu');
export default function Page(){return <MenuContent locale="ja"/>}
