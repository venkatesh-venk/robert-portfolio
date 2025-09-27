import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect to English version (basePath will be added automatically)
  redirect('/en');
}
