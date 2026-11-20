import LegalPage from '@/components/legal-page';
import {pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('zh','条款与细则','/terms');
export default function Page(){return <LegalPage locale="zh" kind="terms"/>}
