import MenuBookViewer from '@/components/menu-book-viewer';
import {pageMetadata} from '@/lib/i18n';
import {menuBranches} from '@/lib/menu-branches';
export const metadata=pageMetadata('ko',menuBranches.ko.ss2,'/menu/ss2');
export default function Page(){return <main id="main"><MenuBookViewer menu="ss2" total={34} locale="ko"/></main>}
