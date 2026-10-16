import {NyonyaHistoryContent} from '@/components/nyonya-history-page';
import {historyCopy} from '@/lib/history-copy';
import {pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('ms',historyCopy.ms.title,'/what-is-nyonya');
export default function Page(){return <NyonyaHistoryContent locale="ms"/>}
