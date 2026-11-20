import LegalPage from '@/components/legal-page';
import {pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('zh','隐私政策','/privacy');
export default function Page(){return <LegalPage locale="zh" kind="privacy"/>}
