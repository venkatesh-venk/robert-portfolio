"use client";

import { useEffect, useState } from 'react';
import LanguageSelectionModal from '@/components/LanguageSelectionModal';

export default function RootPage() {
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Always show language selection modal
    setShowLanguageModal(true);
    setIsLoading(false);
  }, []);

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
