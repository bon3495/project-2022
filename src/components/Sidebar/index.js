import React from 'react';
import { Link } from 'react-router-dom';
import { COMMON_NAME, SIDEBAR_LIST } from '~/constants/common-values';
import { logoIcon, logoutICon, settingsIcon } from '~/styles/icons/icons';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <nav className="h-full py-30 pl-6 pr-50 flex flex-col">
      <Link to="/">
        <h1 className="flex items-center text-2xl gap-x-3 text-dark-black dark:text-white-fff">
          {logoIcon}
          {COMMON_NAME.logoName}
        </h1>
      </Link>
      <ul className="mt-9 flex flex-col gap-y-[10px]">
        {SIDEBAR_LIST.map(item => (
          <SidebarItem {...item} key={item.title} />
        ))}
      </ul>
      <ul className="mt-auto flex flex-col gap-y-6">
        <SidebarItem
          path="/settings"
          icon={settingsIcon}
          title={COMMON_NAME.Settings}
        />
        <SidebarItem icon={logoutICon} title={COMMON_NAME.Logout} />
      </ul>
    </nav>
  );
};

export default React.memo(Sidebar);
