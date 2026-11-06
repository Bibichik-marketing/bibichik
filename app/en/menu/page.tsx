import {MenuContent} from '@/app/menu/page';
import {copy,pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('en','Nyonya Food Menu – Lunch & Dinner','/menu');
export default function Page(){return <MenuContent locale="en"/>}
