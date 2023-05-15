import LayoutWrapper from '@/components/LayoutWrapper';
import '@/styles/main.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  );
}
