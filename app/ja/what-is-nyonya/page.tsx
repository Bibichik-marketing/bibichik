import {NyonyaHistoryContent} from '@/components/nyonya-history-page';
import {historyCopy} from '@/lib/history-copy';
import {pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('ja',historyCopy.ja.title,'/what-is-nyonya');
export default function Page(){return <NyonyaHistoryContent locale="ja"/>;}
