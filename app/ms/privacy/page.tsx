import LegalPage from '@/components/legal-page';
import {pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('ms','Dasar Privasi','/privacy');
export default function Page(){return <LegalPage locale="ms" kind="privacy"/>}
