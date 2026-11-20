import LegalPage from '@/components/legal-page';
import {pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('ja','利用規約','/terms');
export default function Page(){return <LegalPage locale="ja" kind="terms"/>}
