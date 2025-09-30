"use client";

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import LanguageSelectionModal from '@/components/LanguageSelectionModal';

export default function RootPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if force parameter is present (for testing)
    const forceModal = searchParams.get('lang') === 'select';
    
    // Check if user has already selected a language
    const preferredLanguage = localStorage.getItem('preferredLanguage');
    
    if (forceModal || !preferredLanguage || (preferredLanguage !== 'en' && preferredLanguage !== 'fr')) {
      // Show language selection modal
      setShowLanguageModal(true);
      setIsLoading(false);
    } else {
      // User has already selected a language, redirect to it
      router.push(`/${preferredLanguage}`);
    }
  }, [router, searchParams]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="animate-pulse">
          <div className="w-16 h-16 bg-primary-500/20 rounded-full" />
        </div>
      </div>
    );
  }

  if (showLanguageModal) {
    return <LanguageSelectionModal />;
  }

  return null;
}
