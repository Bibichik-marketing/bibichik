import {VisitContent} from '@/components/visit-content';
import {copy,pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('ms',copy.ms.visit.title,'/visit-us');
export default function Page(){return <VisitContent locale="ms"/>}
