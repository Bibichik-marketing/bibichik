import MenuBookViewer from '@/components/menu-book-viewer';
import {pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('ko','Sunway 163 Mall 메뉴','/menu/163');
export default function Page(){return <main id="main"><MenuBookViewer menu="163-multilingual-covered" total={29} locale="ko"/></main>}
