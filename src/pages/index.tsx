import { NextSeo } from 'next-seo';
import clsx from 'clsx';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Mozilla 中国社区"
        description="Mozilla 中国社区网站"
        additionalLinkTags={[{ rel: 'icon', href: '/favicon.ico' }]}
      />
      <div
        className={clsx(
          'h-96 text-3xl dark:text-white',
          'flex justify-center items-center relative px-16'
        )}
      >
        <p>This is Mozilla China Community</p>
      </div>
    </>
  );
}
