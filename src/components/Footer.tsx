import logo from '@/assets/logo.jpeg'
import { IconBrandGithub, IconBrandTelegram } from '@tabler/icons-react'
import { DarkModeSwitch } from './DarkModeSwitch'
import Image from 'next/image'

const navigation = {
  company: [
    { name: '火狐浏览器', href: 'http://www.firefox.com.cn/browsers/' },
    { name: '雷鸟邮箱', href: 'https://www.thunderbird.net/zh-CN/' },
    { name: 'MDN 文档', href: 'https://developer.mozilla.org/zh-CN/' },
    { name: 'Common Voice', href: 'https://commonvoice.mozilla.org/' },
  ],
  link: [
    { name: 'Mozilla', href: 'https://www.mozilla.org/en-US/' },
    { name: '谋智中国', href: 'https://www.firefox.com.cn/' },
    { name: '火狐社区', href: 'http://mozilla.com.cn/' },
    { name: '摩兹台湾', href: 'https://moztw.org/' },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/mozillaChina',
      icon: IconBrandGithub,
    },
    {
      name: 'Telegram',
      href: 'https://t.me/mozilla_china',
      icon: IconBrandTelegram,
    },
  ],
}

const Footer = () => {
  return (
    <footer className='' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32'>
        <div className='md:grid md:grid-cols-2 md:gap-8 lg:gap-20'>
          <div className='space-y-8'>
            <Image className='h-7 w-auto' alt='logo' src={logo} />
            <p className='text-sm leading-6 text-gray-600 dark:text-gray-300'>
              我们致力于为构建一个更加多元、开放、公平的互联网贡献自己的力量。欢迎了解我们并成为我们的一员。
              <i className='icon-[mingcute--sun-line]' />
            </p>
            <div className='flex space-x-6'>
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-gray-500 hover:text-gray-400'
                >
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='h-6 w-6' aria-hidden='true' />
                </a>
              ))}
            </div>
          </div>

          <div className='mt-16 grid grid-cols-2 gap-8 md:mt-0'>
            <div>
              <h3 className='text-sm font-semibold leading-6 dark:text-white'>
                Mozilla 产品
              </h3>
              <ul role='list' className='mt-6 space-y-4'>
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='md:mt-0'>
              <h3 className='text-sm font-semibold leading-6 dark:text-white'>
                友情链接
              </h3>
              <ul role='list' className='mt-6 space-y-4'>
                {navigation.link.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='flex justify-between mt-16 border-t border-gray-900/10 dark:border-white/10 pt-8 sm:mt-20 lg:mt-24'>
          <p className='text-xs leading-5 text-gray-400'>
            &copy; {new Date().getFullYear()} Mozilla 中国社区
          </p>
          <DarkModeSwitch />
        </div>
      </div>
    </footer>
  )
}

export default Footer
