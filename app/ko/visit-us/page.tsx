import {VisitContent} from '@/components/visit-content';
import {copy,pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('ko',copy.ko.visit.title,'/visit-us');
export default function Page(){return <VisitContent locale="ko"/>}
