import MenuBookViewer from '@/components/menu-book-viewer';
import {copy,pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('ko',copy.ko.menu.lunch,'/menu/lunch');
export default function Page(){return <main id="main"><MenuBookViewer menu="lunch" total={27} locale="ko"/></main>}
