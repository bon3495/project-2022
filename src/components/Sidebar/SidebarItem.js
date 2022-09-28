import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

const SidebarItem = ({ path, ...rest }) => {
  return (
    <li className="hover:bg-gray-type-1 dark:hover:bg-black-type-1 rounded-md transition-all ease-in-out duration-200">
      {path ? (
        <Link to={path}>
          <ButtonLink {...rest} />
        </Link>
      ) : (
        <ButtonLink {...rest} />
      )}
    </li>
  );
};

export default SidebarItem;

const ButtonLink = ({ icon, title }) => (
  <Button className="flex items-center text-sm font-normal text-dark-2 dark:text-dark-5 gap-x-2 p-2">
    <span>{icon}</span>
    <span>{title}</span>
  </Button>
);
