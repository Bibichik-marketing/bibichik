import MenuBookViewer from '@/components/menu-book-viewer';
import {copy,pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('ja',copy.ja.menu.dinner,'/menu/dinner');
export default function Page(){return <main id="main"><MenuBookViewer menu="dinner" total={22} locale="ja"/></main>}
