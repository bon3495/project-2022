import clsx from 'clsx';
import React from 'react';

const ButtonSignIn = ({
  icon,
  text,
  className,
  textClassName,
  iconClassName,
  onClick,
}) => {
  return (
    <button
      className={clsx(
        'flex items-center justify-center rounded-lg h-[60px] w-full gap-x-3 hover:shadow-hoverSearch transition-all ease-in-out duration-200 p-3 md:p-5',
        className
      )}
      onClick={onClick}
      type="button"
    >
      <span className={clsx('', iconClassName)}>{icon}</span>
      <span className={clsx('text-sm md:text-base font-normal', textClassName)}>
        {text}
      </span>
    </button>
  );
};

export default ButtonSignIn;
