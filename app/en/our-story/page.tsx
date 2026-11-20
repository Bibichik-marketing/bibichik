import {StoryContent} from '@/components/story-content';
import {copy,pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('en','Our Story – Nyonya Heritage & Traditions','/our-story');
export default function Page(){return <StoryContent locale="en"/>}
