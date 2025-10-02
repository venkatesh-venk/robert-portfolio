import CommunityBoard from '@/components/CommunityBoard';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Community Board | Citoyens en Action',
  description: 'Join the conversation and share your thoughts with the community'
};

export default function CommunityPage() {
  return (
    <>
      <Navigation />
      <CommunityBoard />
    </>
  );
}

