import LegalPage from '@/components/legal-page';
import {pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('ja','プライバシーポリシー','/privacy');
export default function Page(){return <LegalPage locale="ja" kind="privacy"/>}
