import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { ReactNode } from 'react'
import { useDarkMode } from '@/hooks/useDarkMode'
import { getStorage } from '@/lib/storage'
import { isClientSide } from '@/lib/utils'

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  useDarkMode(getStorage('darkMode'), {
    classNameDark: 'dark',
    classNameLight: 'light',
    storageKey: 'darkMode',
    el: isClientSide() ? document.documentElement : undefined,
  })
  return (
    <>
      <div className='mx-auto max-w-7xl px-4 sm:px-10 xl:px-16'>
        <div className='h-full min-h-screen flex flex-col'>
          <Header />
          <main className='my-auto'>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default LayoutWrapper
