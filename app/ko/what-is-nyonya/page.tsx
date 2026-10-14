import {NyonyaHistoryContent} from '@/components/nyonya-history-page';
import {historyCopy} from '@/lib/history-copy';
import {pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('ko',historyCopy.ko.title,'/what-is-nyonya');
export default function Page(){return <NyonyaHistoryContent locale="ko"/>;}
