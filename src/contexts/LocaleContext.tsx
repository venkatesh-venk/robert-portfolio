 "use client";

import { createContext, useContext, ReactNode } from 'react';

type Locale = 'en' | 'fr';

interface LocaleContextType {
  locale: Locale;
  messages: any;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ 
  children, 
  locale, 
  messages 
}: { 
  children: ReactNode; 
  locale: Locale; 
  messages: any; 
}) {
  return (
    <LocaleContext.Provider value={{ locale, messages }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context.locale;
}

export function useTranslations(namespace: string) {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useTranslations must be used within a LocaleProvider');
  }
  
  return (key: string) => {
    const keys = key.split('.');
    let value = context.messages[namespace];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
}