'use client';
import { useDarkMode } from '@/hooks/useDarkMode';
import { getStorage } from '@/lib/storage';

export default function Providers({ children }: { children: React.ReactNode }) {
  const mockElement = {
    classList: {
      add: () => null,
      remove: () => null,
    },
  };
  useDarkMode(getStorage('darkMode'), {
    classNameDark: 'dark',
    classNameLight: 'light',
    storageKey: 'darkMode',
    el: (globalThis.document && document.documentElement) || mockElement,
  });
  return <>{children}</>;
}
