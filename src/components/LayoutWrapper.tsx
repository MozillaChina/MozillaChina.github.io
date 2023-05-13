import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ReactNode } from 'react';

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-10 xl:px-16">
        <div className="h-full min-h-screen flex flex-col">
          <Header />
          <main className="my-auto">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LayoutWrapper;
