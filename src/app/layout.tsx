import '@/styles/main.css';
import Providers from './providers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mozilla 中国社区',
  description: 'Mozilla 中国社区网站',
  icons: '/favicon.ico',
};

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
