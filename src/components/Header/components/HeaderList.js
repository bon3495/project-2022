import React from 'react';
import Button from '~/components/Button';
import { dotIcon, notificationIcon } from '~/styles/icons/icons';
import avatar from '~/styles/imgs/avatar.jpeg';

const HeaderList = () => {
  return (
    <ul className="flex items-center gap-x-6">
      <li className="relative">
        <Button
          onlyIcon={notificationIcon}
          className="w-size-48 h-size-48 rounded-full flex items-center justify-center hover:bg-gray-type-1 dark:hover:bg-black-type-1 transition-all ease-in-out duration-200"
        />
        <span className="absolute top-[14px] right-[14px]">{dotIcon}</span>
      </li>
      <li>
        <Button>
          <img
            src={avatar}
            alt="Avatar"
            className="w-size-48 h-size-48 object-cover rounded-full"
          />
        </Button>
      </li>
    </ul>
  );
};

export default HeaderList;
