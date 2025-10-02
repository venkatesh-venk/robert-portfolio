import CommunityBoard from '@/components/CommunityBoard';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Forum Communautaire | Citoyens en Action',
  description: 'Rejoignez la conversation et partagez vos pensées avec la communauté'
};

export default function CommunityPage() {
  return (
    <>
      <Navigation />
      <CommunityBoard />
    </>
  );
}

