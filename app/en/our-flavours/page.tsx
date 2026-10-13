import {FlavoursContent} from '@/app/our-flavours/page';
import {copy,pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('en',copy.en.flavours.title,'/our-flavours');
export default function Page(){return <FlavoursContent locale="en"/>}
