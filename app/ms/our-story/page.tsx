import {StoryContent} from '@/app/our-story/page';
import {copy,pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('ms',copy.ms.story.title,'/our-story');
export default function Page(){return <StoryContent locale="ms"/>}
