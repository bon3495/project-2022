import React from 'react';
import { HeaderList, SearchBar } from './components';

const Header = () => {
  return (
    <header className="px-30 py-4 h-height-header z-1000 bg-white-fff dark:bg-dark-1 flex items-center justify-between">
      <SearchBar />
      <HeaderList />
    </header>
  );
};

export default React.memo(Header);
