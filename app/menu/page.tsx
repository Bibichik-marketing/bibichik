import {MenuContent} from '@/components/menu-content';
import {pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('en','Our Menu','/menu');
export default function Menu(){return <MenuContent locale="en"/>}
