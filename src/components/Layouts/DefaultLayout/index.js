import React from 'react';
import Header from '~/components/Header';
import Sidebar from '~/components/Sidebar';

const DefaultLayout = ({ children }) => {
  return (
    <main className="flex bg-light-bg dark:bg-dark-black">
      <div className="h-screen w-sidebar bg-white-fff dark:bg-dark-1 fixed top-0 left-0">
        <Sidebar />
      </div>
      <div className="ml-[249px] flex-1 min-h-screen">
        <Header />
        {children}
      </div>
    </main>
  );
};

export default DefaultLayout;
