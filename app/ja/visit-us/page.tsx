import {VisitContent} from '@/app/visit-us/page';
import {copy,pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('ja',copy.ja.visit.title,'/visit-us');
export default function Page(){return <VisitContent locale="ja"/>}
