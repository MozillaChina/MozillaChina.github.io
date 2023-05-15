import { Switch } from '@headlessui/react'
import { useState } from 'react'

export const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false)
  const isDark = darkMode
  const toggle = () => {
    console.log(darkMode)
    setDarkMode((preDarkMode) => !preDarkMode)
    console.log(darkMode)
    const $el = document.documentElement
    if (darkMode) {
      $el.classList.remove('light')
      $el.classList.add('dark')
    } else {
      $el.classList.remove('dark')
      $el.classList.add('light')
    }
  }
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
        } inline-block h-4 w-4 transform rounded-full transition`}
      ></span>

      {isDark ? (
        <i className='icon-[mingcute--moon-line] translate-x-2 scale-75' />
      ) : (
        <i className='icon-[mingcute--sun-line] scale-75 -translate-x-3' />
      )}
    </Switch>
  )
}
