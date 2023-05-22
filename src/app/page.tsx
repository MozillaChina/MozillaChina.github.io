import clsx from 'clsx';

const page = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-10 xl:px-16">
        <div className="h-full min-h-screen flex flex-col">
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
        </div>
      </div>
    </>
  );
};

export default page;
