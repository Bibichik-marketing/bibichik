import LegalPage from '@/components/legal-page';
import {pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('en','Terms & Conditions','/terms');export default function Page(){return <LegalPage locale="en" kind="terms"/>}
