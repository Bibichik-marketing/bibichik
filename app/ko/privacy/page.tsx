import LegalPage from '@/components/legal-page';
import {pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('ko','개인정보 처리방침','/privacy');
export default function Page(){return <LegalPage locale="ko" kind="privacy"/>}
