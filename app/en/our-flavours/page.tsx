<<<<<<< HEAD
import {FlavoursContent} from '@/app/our-flavours/page';
import {copy,pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('en','Nyonya Cuisine – Spices, Ingredients & Flavours','/our-flavours');
export default function Page(){return <FlavoursContent locale="en"/>}
=======
import {redirect} from 'next/navigation';
export default function Page(){redirect('/en/menu/')}
>>>>>>> e764435 (update website)
