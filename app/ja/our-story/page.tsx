import {StoryContent} from '@/app/our-story/page';
import {copy,pageMetadata} from '@/lib/i18n';
export const metadata=pageMetadata('ja',copy.ja.story.title,'/our-story');
export default function Page(){return <StoryContent locale="ja"/>}
