import { delStorage, getStorage, setStorage } from '@/lib/storage';
import { isClientSide } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { create } from 'zustand';

interface IMediaDarkStore {
  darkMode: boolean;
  toggle: () => void;
}

interface IDarkModeConfig {
  classNameDark?: string; // Dark Mode. Default = dark
  classNameLight?: string; // Light Mode. Default = light
  el?: HTMLElement | undefined; // Get document to apply dark mode.
  storageKey?: string; // Save to localStorage. Defalut = darkMode
}

const useMediaDarkStore = create<IMediaDarkStore>(() => ({
  darkMode: false,
  toggle: () => void 0,
}));

const darkModeKey = 'darkMode';
export const useDarkMode = (
  initialState: boolean | undefined,
  options: IDarkModeConfig
) => {
  const {
    classNameDark = 'dark',
    classNameLight = 'light',
    storageKey = darkModeKey,
    el,
  } = options;

  const [darkMode, setDarkMode] = useState(initialState);

  // Present, check localStorage and dark Media
  useEffect(() => {
    const presentedDarkMode = storageKey ? getStorage(storageKey) : undefined;

    if (presentedDarkMode !== undefined) {
      setDarkMode(presentedDarkMode === 'true');
    } else if (typeof initialState === 'undefined') {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, [storageKey]);

  useEffect(() => {
    // if the color scheme is triggered dynamically
    const handler = (e: MediaQueryListEvent) => {
      const storageValue = Boolean(getStorage(storageKey));
      console.log(storageValue);
      setDarkMode(e.matches);

      // reset dark model
      if (storageValue === e.matches) delStorage(storageKey);
    };

    const storageHandler = () => {
      const storageValue = getStorage(storageKey, true);
      if (storageValue === undefined) {
        setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
      } else {
        // switch dark mode together
        setDarkMode(storageValue === 'true');
      }
    };

    return () => {
      window.addEventListener('storage', storageHandler);
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', handler);
    };
  }, [storageKey]);

  useEffect(() => {
    const $el = el || document.documentElement;
    if (darkMode) {
      $el.classList.remove(classNameLight);
      $el.classList.add(classNameDark);
    } else {
      $el.classList.remove(classNameDark);
      $el.classList.add(classNameLight);
    }
  }, [classNameDark, classNameLight, darkMode, el]);

  useEffect(() => {
    useMediaDarkStore.setState({
      darkMode,
    });
  }, [darkMode]);

  const limitRef = useRef(false);
  if (!limitRef.current) {
    limitRef.current = true;
    useMediaDarkStore.setState({
      toggle: () =>
        setDarkMode((b) => {
          if (storageKey && isClientSide()) {
            setStorage(storageKey, String(!b));
          }
          return !b;
        }),
    });
  }
};

export const useIsDark = () => useMediaDarkStore((state) => state.darkMode);
export const useDarkModeSwitch = () => {
  return useMediaDarkStore((state) => state.toggle);
};
