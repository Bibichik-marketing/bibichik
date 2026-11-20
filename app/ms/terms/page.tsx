import LegalPage from '@/components/legal-page';
import {pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('ms','Terma & Syarat','/terms');
export default function Page(){return <LegalPage locale="ms" kind="terms"/>}
