'use client';
import { Switch } from '@headlessui/react';
import { useIsDark } from '@/hooks/useDarkMode';
import { useDarkModeSwitch } from '@/hooks/useDarkMode';
import { IconBrightnessUp, IconMoon } from '@tabler/icons-react';
export const DarkModeSwitch = () => {
  const isDark = useIsDark();
  const toggle = useDarkModeSwitch();
  return (
    <Switch
      onClick={toggle}
      checked={isDark || false}
      className={`${
        isDark ? 'bg-accent' : 'bg-gray-400'
      } relative inline-flex h-6 w-11 items-center rounded-full text-base align-middle`}
    >
      <span
        className={`${
          isDark ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full transition bg-gray-50 dark:bg-black`}
      ></span>

      {isDark ? (
        <IconMoon className="translate-x-2 scale-75 h-4 w-4" />
      ) : (
        <IconBrightnessUp className="scale-75 -translate-x-3 h-4 w-4" />
      )}
    </Switch>
  );
};
