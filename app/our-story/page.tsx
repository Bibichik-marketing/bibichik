import {StoryContent} from '@/components/story-content';
import {pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('en','Our Story','/our-story');
export default function Story(){return <StoryContent locale="en"/>}
