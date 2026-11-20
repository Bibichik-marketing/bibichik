import LegalPage from '@/components/legal-page';
import {pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('ko','이용약관','/terms');
export default function Page(){return <LegalPage locale="ko" kind="terms"/>}
