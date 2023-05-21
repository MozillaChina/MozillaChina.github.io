import Footer from '@/components/Footer';
import Header from '@/components/Header';

import clsx from 'clsx';

const LayoutWrapper = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-10 xl:px-16">
        <div className="h-full min-h-screen flex flex-col">
          <Header />
          <main className="my-auto">
            <div
              className={clsx(
                'h-96 text-3xl dark:text-white',
                'flex justify-center items-center relative px-16'
              )}
            >
              <p>This is Mozilla China Community</p>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LayoutWrapper;
