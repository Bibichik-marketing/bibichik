import {StoryContent} from '@/components/story-content';
import {copy,pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('ms',copy.ms.story.title,'/our-story');
export default function Page(){return <StoryContent locale="ms"/>}
